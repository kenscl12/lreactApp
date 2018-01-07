#!/bin/sh

Stand=$1
BuildPath=$2

User=ufs-static

AppDirName=$(date +%Y%m%d%H%M)
AppHome=/var/www/static.ufs-online.ru/content/ratings
AppPath=${AppHome}/${AppDirName}

scp -r ${BuildPath} ${User}@${Stand}:${AppPath}

ssh ${User}@${Stand} "(cd ${AppHome} && ln -sfn ${AppPath} ${AppHome}/current)"

exit