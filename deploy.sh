#!/bin/bash

echo building solid app
cd my-app/
npm run build
echo built solid app
echo moving to html folder
cp -r dist/* /var/www/html/cringebots/
echo moved to html folder, solid app deployed
