# Image Formatter and Downloader
A simple browser extension that adds a right-click context menu button to convert any web image to PNG before downloading.

## Reason for its existence:
I work with pictures on a daily basis and Davinci Resolve does not support every format. I got fed up with manually converting them after I get them soooo here we go.

## Features:
- **One-Click Conversion:** Right-click any image on the web to start.
- **PNG Output:** Converts images to the high-quality, universally compatible PNG format.
- **Seamless Integration:** Adds a simple option directly into your browser's native context menu.

## How to Install
Since this extension is not yet on the Chrome Web Store, you can install it manually in Developer Mode.
1. Download or clone this repository to your computer.
2. Open your Chrome browser and navigate to chrome://extensions.
3. Enable the "Developer mode" toggle in the top-right corner.
4. Click the "Load unpacked" button that appears.
5. Select the folder where you saved the project files.
6. The extension is now installed and ready to use!

## How to Use
1. Find any image on a website.
2. Right-click on the image.
3. Select "Convert and Download Image" from the menu.
4. The converted PNG file will automatically be downloaded.

## Files:
 - **background.js:** background script, adds the convert & Download button to the context menu. Handles event listeners and targeting.
 - **content.js:** content script, Handles the conversion, and download of a targeted picture.

## Roadmap:
1. Add format customization options.
2. Update download logic to rely on chrome's native download API.
