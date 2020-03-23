ROOT=`pwd`
THEME_REPO_RELATIVE_PATH="src/themes/nodebb-theme-persona-cfpac"
YALC_RELATIVE_PATH=node_modules/.bin/yalc

echo $ROOT

cd $ROOT/$THEME_REPO_RELATIVE_PATH
$ROOT/$YALC_RELATIVE_PATH publish
cd $ROOT
