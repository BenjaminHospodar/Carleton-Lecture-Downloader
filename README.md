﻿# 🎓 Brightspace Lecture Downloader

A lightweight Chrome extension that allows you to download lecture videos from Brightspace with ease. Choose your preferred quality and download instantly.

## ✨ Features

- **Auto Download**: One-click auto-download with the highest available quality
- **Manual Mode**: Generate custom download links for multiple quality options
- **Dark UI**: Modern, clean dark theme inspired by Notion
- **Fast & Lightweight**: Minimal resource usage, optimized performance
- **No Sign-in Required**: Works directly with your Brightspace debug info

## 📋 Table of Contents

- [Installation](#installation)
- [Usage Instructions](#usage-instructions)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## 📥 Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable **Developer mode** (top-right corner)
4. Click **Load unpacked** and select the project folder
5. The extension should now appear in your Chrome toolbar

---

## 🚀 Usage Instructions

### Auto Download (Recommended)

1. Navigate to a Brightspace lecture page with a video player
2. Right-click on the video player
3. Select **"Copy debug info"** from the context menu

   ![Auto Download Step](./docs/gifs/auto-download-step-1.gif)

4. Click the extension icon in your Chrome toolbar
5. Click **"Auto Download"** button
6. The video will automatically download with the highest quality option

   ![Download Complete](./docs/gifs/auto-download-complete.gif)

### Manual Download (Choose Quality)

1. Follow steps 1-3 from Auto Download above
2. In the extension popup, navigate to the **"Manual"** tab
3. Paste the debug info into the text box

   ![Manual Mode Paste](./docs/gifs/manual-paste.gif)

4. Click **"Generate Download Links"**
5. Select your preferred quality from the available options
6. Click **"Download Option"** button for your chosen quality

   ![Manual Download](./docs/gifs/manual-download.gif)

### Troubleshooting

- **Clipboard access denied**: Try using Manual Mode and paste the debug info manually
- **No quality options shown**: Ensure you copied the correct debug info from the video player
- **Download fails**: Check your internet connection and that the video is publicly accessible

---

## 🛠️ Development Setup

### Prerequisites

- Node.js (optional, for development tools)
- Chrome browser
- Text editor (VS Code recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/BenjaminHospodar/Brightspace-Lec-Downloader.git
cd Brightspace-Lec-Downloader

# No npm dependencies required - this is a vanilla JavaScript extension
```

### Project Structure

```
Brightspace-Lec-Downloader/
├── static/
│   ├── css/
│   │   └── popup-styles.css        # Popup styling (dark theme)
│   ├── js/
│   │   └── popup-controller.js     # Main extension logic
│   └── img/
│       ├── 128.png                 # Extension icon
│       └── Logo.svg                # Logo asset
├── pages/
│   └── popup.html                  # Popup UI
├── manifest.json                   # Chrome extension manifest
├── README.md                        # This file
└── docs/
    └── gifs/                        # GIFs for instructions
```

### Local Development

1. Make changes to any files in `static/` or `pages/`
2. Go to `chrome://extensions/`
3. Click the **refresh** icon on the extension card to reload changes
4. Test the extension in a new tab

### Key Files Overview

| File                            | Purpose                                             |
| ------------------------------- | --------------------------------------------------- |
| `manifest.json`                 | Extension configuration (permissions, entry points) |
| `pages/popup.html`              | UI layout with tabs (Auto, Manual, Info)            |
| `static/css/popup-styles.css`   | Carleton Red dark theme styling                     |
| `static/js/popup-controller.js` | Event handlers, download logic, tab management      |
| `static/img/128.png`            | Extension icon                                      |

### Code Style

- **No build process required** - Pure vanilla JavaScript and CSS
- **ES6+ syntax** supported
- **No external dependencies** except Bootstrap CDN for icons
- Clean, readable code with JSDoc comments on complex functions

### Testing

1. Test Auto Download:

   - Go to a Brightspace video page
   - Copy debug info and use Auto Download
   - Verify the video downloads with no quality options shown

2. Test Manual Download:

   - Paste debug info in Manual tab
   - Verify all quality options appear
   - Test downloading each quality option

3. Test Error Handling:
   - Test with invalid JSON
   - Test with incomplete debug info
   - Test without clipboard permissions

### Building/Packaging

No build step required! To package for distribution:

```bash
# Create a ZIP file for submission to Chrome Web Store
zip -r brightspace-downloader.zip . \
  -x "*.git*" "node_modules/*" ".env*"
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit with clear messages (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## 📞 Support

- **Issues**: Found a bug? [Open an issue](https://github.com/BenjaminHospodar/Brightspace-Lec-Downloader/issues)
- **Discussions**: Have a question? [Start a discussion](https://github.com/BenjaminHospodar/Brightspace-Lec-Downloader/discussions)

---

**Made with ❤️ by Benjamin Hospodar**
