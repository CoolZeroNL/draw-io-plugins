# 

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