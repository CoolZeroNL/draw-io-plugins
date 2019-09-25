#!/bin/bash

# check if dir exists.
if [ -d ./svg ]   
then 
    echo "dir present"
    rm -R ./svg
fi

# Remove all but ICONS
git clone --single-branch -b master https://github.com/kubernetes/community.git
cd community
git filter-branch --subdirectory-filter icons/svg/ HEAD
git remote remove origin
cd ..
mv community svg

# wait for GIT
sleep 5

# export all svg files into list
find ./svg -name *.svg >> list

# Rewrite list with url of github
sed -i 's|./svg/|https://raw.githubusercontent.com/kubernetes/community/master/icons/svg/|g' list

# Remoe SVG directory
rm -R ./svg

