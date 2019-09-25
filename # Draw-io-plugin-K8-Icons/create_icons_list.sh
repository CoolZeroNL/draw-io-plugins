#!/bin/bash

git clone --single-branch -b master https://github.com/kubernetes/community.git
cd community
git filter-branch --subdirectory-filter icons/svg/ HEAD
git remote remove origin
cd ..
mv community svg

find ./svg -name *.svg >> list


sed |s|https://raw.githubusercontent.com/kubernetes/community/master/icons/|g list
