#!/bin/bash
# get state name
state_name=$1

# remove current env
rm ./MigalaTelegramBot/.env

# move env state file to repository
cp "./env.${state_name}" ./MigalaTelegramBot/.env

# move to the repository
cd MigalaTelegramBot

# build docker image
docker build -t "telegram-bot-migala-${state_name}" .

# stop and delete previous container bot state
docker stop "telegram-bot-migala-${state_name}" && \
docker container rm "telegram-bot-migala-${state_name}"

# run a new container with the new image
docker run -d --restart always -v $PWD/json:/usr/src/app/json --name "telegram-bot-migala-${state_name}" "telegram-bot-migala-${state_name}"
