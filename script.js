// Get DOM elements
const input = document.getElementById("qrInput");
const qrcodeDiv = document.getElementById("qrcode");
const downloadBtn = document.querySelector(".download-btn");

// Add event listener for input changes
input.addEventListener("input", generateQR);

// Variable to store current canvas
let currentCanvas;

/**
 * Generate QR code based on input value
 */
function generateQR() {
    const message = input.value.trim();
    
    // Clear previous QR code
    qrcodeDiv.innerHTML = "";
    
    // Disable download button if no input
    if (!message) {
        downloadBtn.disabled = true;
        currentCanvas = null;
        return;
    }

    // Show loading spinner
    qrcodeDiv.innerHTML = '<div class="loading"></div>';
    
    // Generate QR code with a slight delay for smooth animation
    setTimeout(() => {
        QRCode.toCanvas(document.createElement("canvas"), message, { 
            width: 256,
            margin: 2,
            color: {
                dark: '#000000',
                light: '#FFFFFF'
            }
        }, (err, canvas) => {
            qrcodeDiv.innerHTML = "";
            if (!err) {
                qrcodeDiv.appendChild(canvas);
                currentCanvas = canvas;
                downloadBtn.disabled = false;
            } else {
                qrcodeDiv.innerHTML = '<p style="color: rgba(255,255,255,0.7);">❌ Error generating QR code</p>';
                downloadBtn.disabled = true;
            }
        });
    }, 300);
}

/**
 * Download the generated QR code as PNG
 */
function downloadQR() {
    if (!currentCanvas) {
        // Add shake animation for feedback
        downloadBtn.style.animation = 'shake 0.5s';
        setTimeout(() => {
            downloadBtn.style.animation = '';
        }, 500);
        return;
    }

    // Create download link
    const link = document.createElement("a");
    link.href = currentCanvas.toDataURL("image/png");
    link.download = `qr_code_${Date.now()}.png`;
    link.click();
    
    // Visual feedback for successful download
    const originalText = downloadBtn.innerHTML;
    downloadBtn.innerHTML = "✅ Downloaded!";
    setTimeout(() => {
        downloadBtn.innerHTML = originalText;
    }, 2000);
}

// Initialize app state
function init() {
    // Disable download button initially
    downloadBtn.disabled = true;
    
    // Focus on input for better UX
    input.focus();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);