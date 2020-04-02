#!/bin/sh

THEME_NAME="nodebb-theme-persona-cfpac"
ROOT=`pwd`
THEME_REPO_RELATIVE_PATH="src/themes/$THEME_NAME"
YALC_BIN_PATH="node_modules/.bin/yalc"

cd $ROOT/$THEME_REPO_RELATIVE_PATH
yarn link
$ROOT/$YALC_BIN_PATH publish
cd $ROOT
$ROOT/$YALC_BIN_PATH add $THEME_NAME
yarn link $THEME_NAME
