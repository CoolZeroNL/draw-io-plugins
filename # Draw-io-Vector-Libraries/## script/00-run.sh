#!/bin/bash

# 0. generate library-xx.xml
# 1. for each SVG

    # 1.1 SVG to Base64 & get height and width

    # 1.2 append basemodel -> basemodel_tmp
    # 1.3 02-urlencode.sh basemodel_tmp -> basemodel_tmp_urlencoded
    # 1.4 04-base64-deflate.pl basemodel_tmp_urlencoded --> append library file...

path='../../# Draw-io-plugin-Cyberark-Icons/cyberark.images-v2/'

## For Each Folder in Cyberark.Images 
ls -F "$path" | grep / | sed 's|/||g' | sort -r | while read folder
do

    # Declare filenames
	name='library-cyberark-'$folder'-v1'
	filename=$name'.xml'
   
    echo "Building:" $filename

    echo '<mxlibrary title="Cyberark Icons '$folder'">[' > ../$filename

        # Count the images.
        counterimg=`ls "$path"/"$folder" | grep .svg | wc -l`
        counter='0'

        ls "$path"/"$folder" | grep .svg | while read line
        do
            counter=$((counter+1))
            svgfilename=${line%.*}
            title=$(echo $svgfilename | sed 's/_/ /g')
            size=$(identify "$path"/"$folder"/"$line")
            width=`echo $size | awk '{print $4}' | awk -F'x' '{print $1}'`
            height=`echo $size | awk '{print $4}' | awk -F'x' '{print $2}'`

            base64svgimg=$(cat "$path"/"$folder"/"$line" | base64 -w 0)
            
            sed 's/{WIDTH}/'$width'/' basemodel > basemodel_tmp
            sed -i 's/{HEIGHT}/'$height'/' basemodel_tmp
            sed -i 's@{BASE64SVG}@'"${base64svgimg}"'@g' basemodel_tmp

            # URL Encode
            ./02-urlencode.sh

            # Deflate and Base64 Encode
            ./04-base64-deflate.pl > basemodel_done

            # append libray file
            if [[ "$counter" == "$counterimg" ]]; then
                append=''
            else
                append=','
            fi

            echo '{"xml":"'`cat basemodel_done`'","w":'$width',"h":'$height',"aspect":"fixed","title":"'$title'"}'$append'' >> ../$filename

        done

    echo ']</mxlibrary>' >> ../$filename

done


   






# housekeeping
rm basemodel_url_encoded
rm basemodel_tmp
rm basemodel_done