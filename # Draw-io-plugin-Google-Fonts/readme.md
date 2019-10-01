# Index

<!-- TOC -->

- [Index](#index)
- [1. Usage:](#1-usage)
    - [1.1. Draw.io](#11-drawio)
- [2. Update Google Fonts file ?](#2-update-google-fonts-file-)
- [3. Identifying your application to Google](#3-identifying-your-application-to-google)
- [4. Ignore file](#4-ignore-file)
- [5. write key to file](#5-write-key-to-file)
- [6. Run script:](#6-run-script)
- [7. Explaining Files:](#7-explaining-files)
    - [7.1. grepfonts.sh](#71-grepfontssh)
    - [7.2. googleFonts.json](#72-googlefontsjson)
    - [7.3. google-fonts.css](#73-google-fontscss)
    - [7.4. google-fonts-v1.js](#74-google-fonts-v1js)

<!-- /TOC -->

# 1. Usage:

## 1.1. Draw.io 
- Plugin URL: https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-Google-Fonts/google-fonts-v1.js?maxAge=10

# 2. Update Google Fonts file ?

1. Get a API_Key of your google ID
2. Run Script:
    - this will generate list of all Google Fonts.
    - update repo
3. refresh your Draw.io window


# 3. Identifying your application to Google
Your application needs to identify itself every time it sends a request to the Google Fonts Developer API, by including an API key with each request.
https://developers.google.com/fonts/docs/developer_api#details

Acquiring and using an API key
https://console.developers.google.com/apis/credentials

# 4. Ignore file
.gitignore file contains `*.key`, that mains that all files that end with `.key` will be ignored for GIT. So any `*.key` files are local and wont be pushed to GIT!

# 5. write key to file
echo '{API_KEY}' > google.key

# 6. Run script:
```
./grepfonts.sh `cat google.key`
```


# 7. Explaining Files:

## 7.1. grepfonts.sh
is the script that do the magic.

## 7.2. googleFonts.json
is the output of alle the Google Font family names.

## 7.3. google-fonts.css
is de output of the api from google, that returns the css content of all the fonts.

## 7.4. google-fonts-v1.js
is the javascript file that need to be loaded in draw.io