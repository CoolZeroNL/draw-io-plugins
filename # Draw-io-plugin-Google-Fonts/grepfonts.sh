#!/usr/bin/env bash
KEY=$1 # get key at https://developers.google.com/fonts/docs/developer_api
OUTPUT_FILE="./googleFonts.json"

if [ -z $KEY ]; then
	echo "Usage: $0 [key]"
	exit 1
fi

echo '[' > $OUTPUT_FILE
curl -s "https://www.googleapis.com/webfonts/v1/webfonts?key=$KEY&sort=alpha" | jq .items[].family >> $OUTPUT_FILE

# curl -s "https://www.googleapis.com/webfonts/v1/webfonts?key=$KEY&sort=alpha" | \
#   sed -n 's/ *"family": "\(.*\)",/  "\1",/p' | \
#   sed '$s/\(.*\),/\1/' >> $OUTPUT_FILE

sed -i '/^"/ s/$/,/' $OUTPUT_FILE     # append end of line ,
sed -i '$s/\(.*\),/\1/' $OUTPUT_FILE  # remove last ,
sed -i -r 's/[[:space:]]+/+/g' $OUTPUT_FILE

echo ']' >> $OUTPUT_FILE


########################################

foo=""
while read x; do
				
		# echo $x
    if [ -z "$foo" ]
    then
      foo="$x"
    else
      foo="${foo}|$x"
    fi

done < <(cat "$OUTPUT_FILE" | jq -c -r .[]);

echo ${foo}

curl https://fonts.googleapis.com/css?family=${foo} > google-fonts.css