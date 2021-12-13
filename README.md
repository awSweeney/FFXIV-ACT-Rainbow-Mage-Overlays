# ACT FFXIV Plugin Overlays

![Release Version](https://img.shields.io/github/v/release/awSweeney/FFXIV-ACT-Rainbow-Mage-Overlays)
![Works with OverlayPlugin](https://img.shields.io/badge/works%20with-FFXIV%20Endwalker-blue.svg?style=flat)
[![Requires ACT](https://img.shields.io/badge/requires-Advanced%20Combat%20Tracker-blue.svg?style=flat)](https://advancedcombattracker.com/download.php)
[![Requires OverlayPlugin](https://img.shields.io/badge/requires-OverlayPlugin-blue.svg?style=flat)](https://github.com/RainbowMage/OverlayPlugin)


## About
These are light-weight overlays meant to be used in conjunction with [Advanced Combat Tracker](https://advancedcombattracker.com/download.php) and the FFXIV Parsing Plugin.

## Navigation
  - [About](#about)
  - [Overlay Previews](#overlay-previews)
  - [Setup](#setup)
  - [Contributing:](#contributing)

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

Requires FFXIV [Overlay Plugin](https://github.com/RainbowMage/OverlayPlugin) to function.

<br>

To use this overlay, do the following:
1. Download and configure [Advanced Combat Tracker](https://advancedcombattracker.com/download.php)
2. Download and configure the [FFXIV Overlay Plugin](https://github.com/RainbowMage/OverlayPlugin/blob/master/README-en.md)
   * You may need to 'unblock' the included DLL files. You can do this by right clicking on them, going to properties, and then checking 'unblock' at the bottom of the dialog window
3. Download the latest release of this overlay (click 'releases' above and download the latest version)
4. Extract the 'FFXIV-ACT-Rainbow-Mage-Overlays' zip into your ACT installation directory
5. Open ACT, select the 'Plugins' tab, then the 'OverlayPlugin.dll' tab, then the 'Mini Parse' tab
6. Configure the URL field to point to the MiniParseGlow_CritMonitor_4.05.html file within the 'FFXIV-ACT-Rainbow-Mage-Overlays' folder as follows:

<br>

<img src="./images/preview/act_miniparse_glow_config.png"/>

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