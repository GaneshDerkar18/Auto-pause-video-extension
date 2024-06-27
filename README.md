# Auto-pause-video-extension
Auto pause video when switching the tab
Auto Pause Video Firefox Extension

Automatically pauses video playback when switching tabs in Firefox.
Table of Contents

    Overview
    Features
    Installation
    Usage
    Development
    Contributing
    License
    Contact

Overview

This Firefox extension enhances user experience by automatically pausing videos when switching to another tab, preventing unwanted video playback.
Features

    Automatic Pause: Pauses video playback when switching tabs.
    
Installation
From Mozilla Add-ons

You can install the extension directly from the Mozilla Add-ons site:

    Visit Auto Pause Video on Mozilla Add-ons.
    Click on the "Add to Firefox" button to install the extension.

From Source Code

To build and install the extension from the source code:

    Clone the repository:

    bash

git clone https://github.com/18grd/Auto-pause-video-extension.git
cd auto-pause-video

Install dependencies:

bash

npm install

Build the extension:

bash

    npm run build

    Load the extension in Firefox:
        Open Firefox and navigate to about:debugging.
        Click on "This Firefox" on the left sidebar.
        Click on "Load Temporary Add-on" and select the manifest.json file from the dist directory.

Usage

    Open a tab with a video playing.
    Switch to another tab.
    The video in the previous tab will automatically pause.


Development
Prerequisites

    Node.js: Version 14.17.0 or higher
    npm: Version 6.14.13 or higher

Build Scripts

    Development Mode: Use npm run dev to build the extension in development mode.
    Production Build: Use npm run build to create a production-ready build of the extension.

Contributing

Contributions are welcome! Please fork the repository and submit a pull request.
License

This project is licensed under the MIT License. See the LICENSE file for details.
Contact

For issues or questions, contact: ganesh.derkar.dev@gmail.com
