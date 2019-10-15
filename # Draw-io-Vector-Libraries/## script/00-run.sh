#!/bin/bash





## For Each Folder in Cyberark.Images 
ls -F ../../\#\ Draw-io-plugin-Cyberark-Icons/cyberark.images/ | grep / | sed 's|/||g' | sort -r | while read folder
do

	name='library-cyberark-'$folder'-v1'
	filename=$name'.xml'
    

    echo $name
    echo $filename

    echo '<mxlibrary title="Cyberark Icons '$folder'">[' > ../$filename

        counterimg=`ls ../../\#\ Draw-io-plugin-Cyberark-Icons/cyberark.images/$folder | grep .svg | wc -l`
        counter='0'

        ls ../../\#\ Draw-io-plugin-Cyberark-Icons/cyberark.images/$folder | grep .svg | while read line
        do
            counter=$((counter+1))
            svgfilename=${line%.*}
            size=$(identify ../../\#\ Draw-io-plugin-Cyberark-Icons/cyberark.images/$folder/$line)
            width=`echo $size | awk '{print $4}' | awk -F'x' '{print $1}'`
            height=`echo $size | awk '{print $4}' | awk -F'x' '{print $2}'`

            base64svgimg=$(cat ../../\#\ Draw-io-plugin-Cyberark-Icons/cyberark.images/$folder/$line | base64 -w 0)
            
            sed 's/{WIDTH}/'$width'/' basemodel > basemodel_tmp
            sed -i 's/{HEIGHT}/'$height'/' basemodel_tmp
            sed -i 's@{BASE64SVG}@'"${base64svgimg}"'@g' basemodel_tmp

            ./02-urlencode.sh
            ./04-base64-deflate.pl > basemodel_done

            # append libray file
            if [[ "$counter" == "$counterimg" ]]; then
            append=''
            else
            append=','
            fi

            echo '{"xml":"'`cat basemodel_done`'","w":'$width',"h":'$height',"aspect":"fixed","title":"'$svgfilename'"}'$append'' >> ../$filename

            # exit 1
        done

    echo ']</mxlibrary>' >> ../$filename
    # exit 1
done


   




# 0. generate library-xx.xml
# 1. for each SVG

    # 1.1 SVG to Base64 & get height and width

    # 1.2 append basemodel -> basemodel_tmp
    # 1.3 02-urlencode.sh basemodel_tmp -> basemodel_tmp_urlencoded
    # 1.4 04-base64-deflate.pl basemodel_tmp_urlencoded --> append library file...




# housekeeping
rm basemodel_url_encoded
rm basemodel_tmp
rm basemodel_done