#!/bin/bash
cd desktop/dev/kampei/business
npm run build
cp -R app/build/ api/public
cd api
git add .
git commit -m "deploy"
git push heroku main