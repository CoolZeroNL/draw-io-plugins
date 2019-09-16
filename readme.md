# 1. Index:

<!-- TOC -->

- [Index:](#index)
- [Installation of a Plugin:](#installation-of-a-plugin)
    - [Use of CORS Proxy:](#use-of-cors-proxy)
    - [Cors Proxy information:](#cors-proxy-information)
    - [Install Plugin Within Draw-io](#install-plugin-within-draw-io)
- [Plugins:](#plugins)
    - [Resize (height & width by selected cell)](#resize-height--width-by-selected-cell)
        - [Sample:](#sample)
    - [Reorder Childs:](#reorder-childs)
    - [SecurIT Huisstijl](#securit-huisstijl)
- [Templaing sample:](#templaing-sample)

<!-- /TOC -->

# 2. Installation of a Plugin:

## 2.1. Use of CORS Proxy:
Because the plugins are been included within draw.io the browser will block this, because the plugin is not on the same domain as draw.io is. So the browser will give the next error: `Refused to execute script from 'https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/draw-io-plugin-resize.js' because its MIME type ('text/plain') is not executable, and strict MIME type checking is enabled.` 

To fix this u need to use a CORS proxy server.

## 2.2. Cors Proxy information:
https://ovsoinc.github.io/yacdn.org/

## 2.3. Install Plugin Within Draw-io
<p align="center">
  <img width="25%" src="./readme.images/01-plugins.png">
</p>

<p align="center">
  <img width="25%" src="./readme.images/02-plugins-list.png">
</p>

<p align="center">
  <img width="25%" src="./readme.images/03-plugin-add-url.png">
</p>

<p align="center">
  <img width="25%" src="./readme.images/04-plugins-added.png">
</p>

<p align="center">
  <img width="25%" src="./readme.images/05-plugins-added-applyed.png">
</p>

<p align="center">
  <img width="25%" src="./readme.images/06-plugin-warning.png">
</p>

<p align="center">
  <img width="25%" src="./readme.images/07-menu-harwig.png">
</p>

# 3. Plugins:

## 3.1. Resize (height & width by selected cell)
This plugin enables u to resize a object within draw.io. To use it, select the object that is the right size(height & width), then select: `Harwig Tools` -> `Resize`. All the same objects(same style as selected cell) will be resize to the same size of the selected object.

https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/draw-io-plugin-resize.js?maxAge=10

### 3.1.1. Sample:
<p align="center">
  <img width="25%" src="./readme.images/example-draw-io-plugin-resize.gif">
</p>

## 3.2. Reorder Childs:
https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/draw-io-plugin-redraw-v3.js?maxAge=10

## 3.3. SecurIT Huisstijl
https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/draw-io-plugin-securit-huisstyle.js?maxAge=10

# 4. Templaing sample:
https://yacdn.org/serve/https://gist.githubusercontent.com/lindapadilla/5974598/raw/0c80ac0f4d03234bffb50cb14eda0a9b23f6e07a/customizeBPMN
