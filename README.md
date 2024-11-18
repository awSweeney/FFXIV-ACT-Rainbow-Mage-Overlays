# ACT FFXIV Plugin Overlays

[![Release Version](https://img.shields.io/github/v/release/awSweeney/FFXIV-ACT-Rainbow-Mage-Overlays)](https://github.com/awSweeney/FFXIV-ACT-Rainbow-Mage-Overlays/releases)
![Works with Endwalker](https://img.shields.io/badge/works%20with-FFXIV%20Dawntrail-blue.svg?style=flat)
[![Requires ACT](https://img.shields.io/badge/requires-Advanced%20Combat%20Tracker-blue.svg?style=flat)](https://advancedcombattracker.com/download.php)
![License](https://img.shields.io/github/license/awSweeney/FFXIV-ACT-Rainbow-Mage-Overlays)
  
## About
These are light-weight overlays meant to be used in conjunction with [Advanced Combat Tracker](https://advancedcombattracker.com/download.php) and the FFXIV Parsing Plugin.

## Navigation
  - [About](#about)
  - [Overlay Previews](#overlay-previews)
  - [Setup](#setup)
  - [Contributing](#contributing)

<br>

## Overlay Previews

<details open>
<summary style="font-weight:bold">Mini Parse Glow Classic</summary>
<img src="./images/preview/MPG_CritMonitor_Preview.jpg"/>
</details>


<details>
<summary style="font-weight:bold">Mini Parse Glow Classic BG</summary>
<p style="font-style:italic">Created by @Vrandus</p>
<img src="./images/preview/MiniParseGlow_CritMonitor_Classic_BG.png"/>
</details>


<details>
<summary style="font-weight:bold">Mini Parse Glow HPS MaxHit Highlighted You BG</summary>
<p style="font-style:italic">Created by @Vrandus</p>
<img src="./images/preview/MiniParseGlow_HPS_MaxHit_HighlightedYou_BG.png"/>
</details>


<details>
<summary style="font-weight:bold">Mini Parse Glow HPS MaxHit Highlighted You</summary>
<p style="font-style:italic">Created by @Vrandus</p>
<img src="./images/preview/MiniParseGlow_HPS_MaxHit_HighlightedYou.png"/>
</details>


<br>

## Setup

<br>

To use this overlay, do the following:
1. Download and configure [Advanced Combat Tracker](https://advancedcombattracker.com/download.php)
2. Select FFXIV parsing plugin after installation.
3. Download the latest release of this overlay (click 'releases' above and download the latest version).
4. Extract the 'FFXIV-ACT-Rainbow-Mage-Overlays' zip into your ACT installation directory.
5. Install the OverlayPlugin.
    * Goto the **Plugins** tab and click the **Get Plugins...** button.
    
    <br>
    <img src="./images/preview/overlay-plugin-install-1.png" width="1375px"/>
    <br><br>
    
    * Select the **OverlayPlugin** option.
    
    <br>
    <img src="./images/preview/overlay-plugin-install-2.png"/>
    <br><br>
    
    * Once installed goto the **OverlayPlugin.dll** tab and press the New button.
    
    <br>
    <img src="./images/preview/overlay-plugin-install-3.png" width="1375px"/>
    <br><br>
    
    * Create a new Overlay using the **'Custom' Preset** and **'MiniParse' type**. Giving it a name of your choosing.
    
    <br>
    <img src="./images/preview/overlay-plugin-install-4.png"/>
    <br><br>
    
    * In the **URL** text box link the path to the overlay of your choosing.
    
    <br>
    <img src="./images/preview/overlay-plugin-install-5.png" width="1375px"/>
    <br><br>
    
6. Note that you may need to run ACT in Admin mode for it to function.

<br>

## Contributing

PRs are open, feel free to contribute:

- In order to add new classes and icons do the following
  1. Add the new class icons to the various images folders. 
     * Icons should be 32x32.
     * [Gamerscape](https://ffxiv.gamerescape.com/wiki/Dictionary_of_Icons) is often a good source.
  2. Update **config/config.js** with the new class abbrevations under the applicable role.
- Overlay components should be distibuted properly in their respective folders.
- New overlays should include a preview image and be added to the preview list.
