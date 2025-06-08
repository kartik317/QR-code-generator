# 🔥 QR Code Generator

A beautiful, modern QR code generator with glassmorphism design and smooth animations. Convert any text, URL, or data into a downloadable QR code instantly.

![QR Code Generator Preview](https://i.postimg.cc/cLjMGS6b/1749303512176.jpg)

## ✨ Features

- **🎨 Modern Design**: Glassmorphism UI with beautiful gradients and blur effects
- **⚡ Real-time Generation**: QR codes generate instantly as you type
- **📱 Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **💫 Smooth Animations**: Engaging hover effects and transitions
- **📥 Easy Download**: One-click download as PNG with timestamp
- **🔄 Loading States**: Visual feedback during QR code generation
- **❌ Error Handling**: Graceful error messages for invalid inputs
- **🎯 User-Friendly**: Clean interface with intuitive controls

## 🚀 Demo

Simply open `index.html` in your browser and start generating QR codes!

## 📁 Project Structure

```
qr-code-generator/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🛠️ Installation

1. **Clone or Download** the repository
2. **No build process needed** - just open `index.html` in your browser
3. **All dependencies** are loaded via CDN

```bash
# Clone the repository
git clone https://github.com/kartik317/QR-code-generator.git

# Navigate to project folder
cd qr-code-generator

# Open in browser (or use live server)
open index.html
```

## 💻 Usage

1. **Type or paste** your text, URL, or any data into the input field
2. **Watch** as the QR code generates automatically
3. **Click download** to save the QR code as a PNG file
4. **Scan** the QR code with any QR scanner app

### Supported Data Types
- URLs (https://example.com)
- Text messages
- Email addresses
- Phone numbers
- WiFi credentials
- Binary data
- And much more!

## 🎨 Design Features

### Visual Elements
- **Glassmorphism Effect**: Modern frosted glass appearance
- **Gradient Background**: Beautiful purple-blue gradient
- **Smooth Animations**: Slide-up, fade-in, and zoom effects
- **Interactive Feedback**: Hover states and click animations

### User Experience
- **Auto-focus**: Input field is focused on page load
- **Loading Spinner**: Shows while generating QR codes
- **Button States**: Download button disabled until QR is generated
- **Visual Feedback**: Success/error messages with animations

## 🔧 Technical Details

### Dependencies
- **QRCode.js** (v1.5.0) - QR code generation library loaded via CDN
- **Pure HTML/CSS/JS** - No frameworks required

### Browser Support
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

### Performance
- **Lightweight**: < 10KB total size
- **Fast Loading**: CDN-hosted dependencies
- **Optimized**: Efficient DOM manipulation

## 📱 Mobile Responsive

The generator is fully responsive and works great on:
- 📱 Mobile phones (320px+)
- 📟 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🎯 Key Functions

### `generateQR()`
- Generates QR code from input text
- Handles empty input gracefully
- Shows loading state during generation
- Updates download button state

### `downloadQR()`
- Downloads QR code as PNG
- Adds timestamp to filename
- Provides visual feedback
- Handles edge cases

## 🔮 Future Enhancements

- [ ] **Color Customization**: Choose QR code colors
- [ ] **Size Options**: Different QR code dimensions
- [ ] **Format Options**: SVG, PDF export
- [ ] **Batch Generation**: Multiple QR codes at once
- [ ] **History**: Save generated QR codes locally
- [ ] **Logo Integration**: Add logos to QR codes
- [ ] **Analytics**: Track QR code usage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- **QRCode.js** - Excellent QR code generation library
- **Modern CSS** - Inspiration from contemporary web design trends
- **Community** - Thanks to all contributors and users

## 📞 Support

If you have any questions or issues:
1. Check the existing issues
2. Create a new issue with detailed description
3. Provide browser and OS information

---

**Made with ❤️ and modern web technologies**

*Star ⭐ this repository if you found it helpful!*