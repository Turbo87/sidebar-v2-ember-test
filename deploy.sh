#!/bin/bash

set -e

cd dist
git init
git config user.name "Travis CI"
git config user.email "builds@travis-ci.org"
git add .
git commit -m "Deploy to GitHub Pages"
git push --force --quiet "https://${GH_TOKEN}@github.com/Turbo87/sidebar-v2-ember-test.git" master:gh-pages > /dev/null 2>&1
