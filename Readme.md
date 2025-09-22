# Image Formater and Downloader
A simple browser extension that adds a right-click context menu button to convert any web image to PNG before downloading.

## Reason for its existence:
I work with pictures on a daily basis and Davinci Resolve does not support every format. I got fed up with manually converting them after I get them soooo here we go.

## Features:
- **One-Click Conversion:** Right-click any image on the web to start.
- **PNG Output:** Converts images to the high-quality, universally compatible PNG format.
- **Seamless Integration:** Adds a simple option directly into your browser's native context menu.

## Files:
 - **background.js:** background script, adds the convert & Download button to the context menu. Handles event listeners and targeting.
 - **content.js:** content script, Handles the conversion, and download of a targeted picture.

## Roadmap:
1. Add format customization options.
2. Update download logic to rely on chrome's native download API.
