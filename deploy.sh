#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://rizkymhdm2k.github.io
# git push -f git@github.com:rizkymhdm2k/rizkymhdm2k.github.io.git main

# if you are deployingit remote rm origin
g to https://rizkymhdm2k.github.io/herWebsite1
# git push -f git@github.com:rizkymhdm2k/herweb.git main:gh-pages

cd -