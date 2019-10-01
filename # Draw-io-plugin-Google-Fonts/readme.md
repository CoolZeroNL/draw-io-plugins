# Usage:

## Draw.io 
- Plugin URL: https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-Google-Fonts/google-fonts-v1.js?maxAge=10

# Update Google Fonts file ?

1. Get a API_Key of your google ID
2. Run Script:
    - this will generate list of all Google Fonts.
    - update repo
3. refresh your Draw.io window


# Identifying your application to Google
Your application needs to identify itself every time it sends a request to the Google Fonts Developer API, by including an API key with each request.
https://developers.google.com/fonts/docs/developer_api#details

Acquiring and using an API key
https://console.developers.google.com/apis/credentials

# Ignore file
.gitignore file contains `*.key`, that mains that all files that end with `.key` will be ignored for GIT. So any `*.key` files are local and wont be pushed to GIT!

# write key to file
echo '{API_KEY}' > google.key

Run:
```
./grepfonts.sh `cat google.key`
```


# Files:

## grepfonts.sh
is the script that do the magic.

## googleFonts.json
is the output of alle the Google Font family names.

## google-fonts.css
is de output of the api from google, that returns the css content of all the fonts.

## google-fonts-v1.js
is the javascript file that need to be loaded in draw.io