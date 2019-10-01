#!/usr/bin/env bash
KEY=$1 # get key at https://developers.google.com/fonts/docs/developer_api
OUTPUT_FILE="./googleFonts.json"

if [ -z $KEY ]; then
	echo "Usage: $0 [key]"
	exit 1
fi

echo '[' > $OUTPUT_FILE

curl -s "https://www.googleapis.com/webfonts/v1/webfonts?key=$KEY&sort=alpha" | \
  sed -n 's/ *"family": "\(.*\)",/  "\1",/p' | \
  sed '$s/\(.*\),/\1/' >> $OUTPUT_FILE

echo ']' >> $OUTPUT_FILE