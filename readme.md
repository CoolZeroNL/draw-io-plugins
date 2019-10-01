 # Index:

<!-- TOC -->

- [1. Plugins:](#1-plugins)
    - [1.1. Resize (height & width by selected cell)](#11-resize-height--width-by-selected-cell)
    - [1.2. ReOrder Childeren](#12-reorder-childeren)
    - [1.3. Explore](#13-explore)
    - [1.4. SecurIT Huisstijl](#14-securit-huisstijl)
- [2. Install Plugin Within Draw-io](#2-install-plugin-within-draw-io)
    - [2.1. Use of CORS Proxy:](#21-use-of-cors-proxy)
        - [2.1.1. Cors Proxy information:](#211-cors-proxy-information)
    - [2.2. Installation Steps](#22-installation-steps)
- [3. Distribution:](#3-distribution)
    - [3.1. Plugin: Resize](#31-plugin-resize)

<!-- /TOC -->


https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-SecurIT/securit.huisstyle.images/security_isp-server.svg?sanitize=true

# 1. Plugins:

## 1.1. Resize (height & width by selected cell)
This plugin enables u to resize a object within draw.io. To use it, select the object that is the right size(height & width), then select: `Harwig Tools` -> `Resize`. All the same objects(same style as selected cell) will be resize to the same size of the selected object.

<p align="center">
  <img width="50%" src="./readme.images/example-draw-io-plugin-resize.gif">
</p>

- Plugin URL: https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-ReSize/draw-io-plugin-resize-v1.js?maxAge=10

## 1.2. ReOrder Childeren
- Plugin URL: https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-ReOrder/draw-io-plugin-reorder-childeren-v3.js?maxAge=10

## 1.3. Explore
- Plugin URL: https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-Explore/draw-io-plugin-explore.js?maxAge=10

## 1.4. SecurIT Huisstijl
<!-- 
- more information: https://github.com/holroy/draw.io-plugins/wiki/Dissected-Example-Plugin
- more information: https://code.greenhost.net/totem/ind/tree/ca8b1b90ad23b8fa1800b8e055a7ee3bd9df9bb8/grapheditorxblock/src/stencils 
- more information: https://yacdn.org/serve/https://gist.githubusercontent.com/lindapadilla/5974598/raw/0c80ac0f4d03234bffb50cb14eda0a9b23f6e07a/customizeBPMN
-->

- Plugin URL: https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-SecurIT/draw-io-plugin-securit-huisstyle-v1.js?maxAge=10

  - Will add:
    - Stencils
    - Libre Franklin

<p align="center">
  <img width="25%" src="./readme.images/securit-stencils.png">
  <img width="25%" src="./readme.images/securit-fonts.png">
</p>

# 2. Install Plugin Within Draw-io

## 2.1. Use of CORS Proxy:
Because the plugins are been included within draw.io the browser will block this, because the plugin is not on the same domain as draw.io is. So the browser will give the next error: `Refused to execute script from 'https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/draw-io-plugin-resize.js' because its MIME type ('text/plain') is not executable, and strict MIME type checking is enabled.` 

To fix this u need to use a CORS proxy server.

### 2.1.1. Cors Proxy information:
https://ovsoinc.github.io/yacdn.org/

## 2.2. Installation Steps
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




<!-- 
# 3. Distribution:

## 3.1. Plugin: Resize
- Rogier
- Stefan
- Peter
- Abdel 
-->
