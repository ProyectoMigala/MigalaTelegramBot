#!/bin/bash
# cd to script path
cd /root/opt

# cd to Project path
cd MigalaTelegramBot 

# new line
echo ""

# get last changes from github
git pull origin master

# new line
echo ""

# cd to scrip path
cd ..

# get file names
for file_name in `ls | grep 'env'`; do
	# get env name
	name=${file_name#*.}
	
	# if testing don't deploy
	if [[ $name == *"testing"* ]]; then
		continue
	fi

	# deploy app
	./deploy.sh $name
	
	# new line
	echo ""
done
