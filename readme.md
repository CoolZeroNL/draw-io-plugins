# 1. Index:

<!-- TOC -->

- [1. Index:](#1-index)
- [2. Plugins:](#2-plugins)
    - [2.1. Resize (height & width by selected cell)](#21-resize-height--width-by-selected-cell)
    - [2.2. ReOrder Childeren](#22-reorder-childeren)
    - [2.3. Explore](#23-explore)
    - [2.4. SecurIT Huisstijl](#24-securit-huisstijl)
- [3. Install Plugin Within Draw-io](#3-install-plugin-within-draw-io)
    - [3.1. Use of CORS Proxy:](#31-use-of-cors-proxy)
        - [3.1.1. Cors Proxy information:](#311-cors-proxy-information)
    - [3.2. Installation Steps](#32-installation-steps)
- [4. Distribution:](#4-distribution)
    - [4.1. Plugin: Resize](#41-plugin-resize)

<!-- /TOC -->

# 2. Plugins:

## 2.1. Resize (height & width by selected cell)
This plugin enables u to resize a object within draw.io. To use it, select the object that is the right size(height & width), then select: `Harwig Tools` -> `Resize`. All the same objects(same style as selected cell) will be resize to the same size of the selected object.

<p align="center">
  <img width="25%" src="./readme.images/example-draw-io-plugin-resize.gif">
</p>

- Plugin URL: https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-ReSize/draw-io-plugin-resize-v1.js?maxAge=10

## 2.2. ReOrder Childeren
- Plugin URL: https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-ReOrder/draw-io-plugin-reorder-childeren-v3.js?maxAge=10

## 2.3. Explore
- Plugin URL: https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-Explore/draw-io-plugin-explore.js?maxAge=10

## 2.4. SecurIT Huisstijl
<!-- 
- more information: https://github.com/holroy/draw.io-plugins/wiki/Dissected-Example-Plugin
- more information: https://code.greenhost.net/totem/ind/tree/ca8b1b90ad23b8fa1800b8e055a7ee3bd9df9bb8/grapheditorxblock/src/stencils 
- more information: https://yacdn.org/serve/https://gist.githubusercontent.com/lindapadilla/5974598/raw/0c80ac0f4d03234bffb50cb14eda0a9b23f6e07a/customizeBPMN
-->

- Plugin URL: https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-SecurIT/draw-io-plugin-securit-huisstyle-v1.js?maxAge=10

# 3. Install Plugin Within Draw-io

## 3.1. Use of CORS Proxy:
Because the plugins are been included within draw.io the browser will block this, because the plugin is not on the same domain as draw.io is. So the browser will give the next error: `Refused to execute script from 'https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/draw-io-plugin-resize.js' because its MIME type ('text/plain') is not executable, and strict MIME type checking is enabled.` 

To fix this u need to use a CORS proxy server.

### 3.1.1. Cors Proxy information:
https://ovsoinc.github.io/yacdn.org/

## 3.2. Installation Steps
To add a new plugin, do the next steps:

Go to `Extras` -> `Plugins`

<p align="center">
  <img width="50%" src="./readme.images/01-plugins.png">
</p>

Click on `Add`

<p align="center">
  <img width="50%" src="./readme.images/02-plugins-list.png">
</p>

Paste the url of the wanted Plugin and click on `Add`

<p align="center">
  <img width="50%" src="./readme.images/03-plugin-add-url.png">
</p>

If you are done adding your wanted plugins, click `Apply`

<p align="center">
  <img width="50%" src="./readme.images/04-plugins-added.png">
</p>

You will get a warning, click `Ok` and refresh your draw.io page.
<p align="center">
  <img width="50%" src="./readme.images/05-plugins-added-applyed.png">
</p>

When using custom plugins, you will get a warning every times you open Draw.io, check if the plugin you want is listed here, and press `Ok`

<p align="center">
  <img width="50%" src="./readme.images/06-plugin-warning.png">
</p>

Now you see a extra menu item `Harwig Tools`. As a sub item the plugin functionality will be availible.
<p align="center">
  <img width="50%" src="./readme.images/07-menu-harwig.png">
</p>




# 4. Distribution:

## 4.1. Plugin: Resize
- Rogier
- Stefan
- Peter
- Abdel
