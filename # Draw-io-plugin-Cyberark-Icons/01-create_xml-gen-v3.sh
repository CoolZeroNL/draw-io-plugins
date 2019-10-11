#!/bin/bash

## need: sudo apt install gridsite-clients

plugin_filename='draw-io-plugin-cyberark-icons-v3.js'

## start:
	echo 'Draw.loadPlugin(function(ui) {' > $plugin_filename
	echo '' >> $plugin_filename

ls -F cyberark.images/ | grep / | sed 's|/||g' | while read folder
do



	name='stencil-cyberark-'$folder'-v3'
	filename=$name'.xml'

cat >>$plugin_filename <<EOL
    // Adds custom sidebar entry
    ui.sidebar.addStencilPalette('flowchart', 'Cyberark Icons ${folder}', 'https://yacdn.org/serve/https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-Cyberark-Icons/${filename}?maxAge=10', ';fillColor=#ffffff;strokeColor=#000000;strokeWidth=2');

    // Collapses default sidebar entry and inserts this before
    var c = ui.sidebar.container;
    c.firstChild.click();
    c.insertBefore(c.lastChild, c.firstChild);
    c.insertBefore(c.lastChild, c.firstChild);

EOL
	
	## start:
	echo '<shapes name="stencils.'"$name"'">' > $filename

	ls cyberark.images/$folder | grep .svg | while read line
	do

		size=`identify cyberark.images/$folder/$line`
		width=`echo $size | awk '{print $3}' | awk -F'x' '{print $1}'`
		height=`echo $size | awk '{print $3}' | awk -F'x' '{print $2}'`

	# do something with $line here
	item=`basename $line .svg`
	url=`urlencode https://raw.githubusercontent.com/CoolZeroNL/draw-io-plugins/master/%23%20Draw-io-plugin-Cyberark-Icons/cyberark.images/$folder/$line`
	# 
	#    label=$(basename $(dirname $line))

	# echo $item
	# echo $url
	# echo ""
	# echo $label

cat >>$filename <<EOL
	<shape name="ca_icons_${item}" w="${width}" h="${height}" aspect="variable">
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
			<image src="https://jsonp.afeld.me/?url=${url}%3Fsanitize%3Dtrue" x="0.00" y="0.00" w="${width}" h="${height}"/>
		</foreground>
	</shape>
EOL

	done

	## End
	echo '</shapes>' >> $filename


done

echo '});' >> $plugin_filename


