#!/bin/bash

# URL encoded
replace_value=$(cat basemodel_tmp | sed -f 03-urlencode_escape.sed)          # value = URL Encoded !
echo $replace_value > basemodel_url_encoded