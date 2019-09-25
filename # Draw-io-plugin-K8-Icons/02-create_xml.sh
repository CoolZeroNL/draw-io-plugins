#!/bin/bash

## need: sudo apt install gridsite-clients

name='stencil-k8'
filename=$name'.xml'

## start:
echo '<shapes name="stencils.'"$name"'">' > $filename

cat list | grep .svg | while read line
do
   # do something with $line here
   item=`basename $line .svg`
   url=`urlencode $line`
   label=$(basename $(dirname $line))

cat >>$filename <<EOL
	<shape name="k8_icons_${item}_${label}" w="64" h="64" aspect="variable">
		<connections>
			<constraint x="0.500" y="0.000" perimeter="0" name="top-center"/>
			<constraint x="0.000" y="0.000" perimeter="0" name="top-left"/>
			<constraint x="1.000" y="0.000" perimeter="0" name="top-right"/>
			<constraint x="1.000" y="0.500" perimeter="0" name="right-center"/>
			<constraint x="0.000" y="0.500" perimeter="0" name="left-center"/>
			<constraint x="0.000" y="1.000" perimeter="0" name="bottom-left"/>
			<constraint x="1.000" y="1.000" perimeter="0" name="bottom-right"/>
			<constraint x="0.500" y="1.000" perimeter="0" name="bottom-center"/>
		</connections>
		<foreground>
			<image src="https://jsonp.afeld.me/?url=${url}%3Fsanitize%3Dtrue" x="0.00" y="0.00" w="64" h="64"/>
		</foreground>
	</shape>
EOL

done

## End
echo '</shapes>' >> $filename


rm list


