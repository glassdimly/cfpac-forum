#!/bin/sh

THEME_NAME="nodebb-theme-persona-cfpac"
ROOT=`pwd`
THEME_REPO_RELATIVE_PATH="src/themes/$THEME_NAME"

echo $ROOT

cd $ROOT/$THEME_REPO_RELATIVE_PATH
yarn link
cd $ROOT
yarn link $THEME_NAME
