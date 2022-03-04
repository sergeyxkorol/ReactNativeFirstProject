#!/usr/bin/env bash
# Creates an .env from ENV variables for use with react-native-config
ENV_WHITELIST=${ENV_WHITELIST:-"^RN"}
printf "Creating an .env file with the following whitelist:\n"
printf "%s\n\n" $ENV_WHITELIST
if [  "$APPCENTER_BRANCH" == "master" ]; then
  set | egrep -e $ENV_WHITELIST | egrep -v "^_" | egrep -v "WHITELIST" > .env.production
  cat .env.production
else
  set | egrep -e $ENV_WHITELIST | egrep -v "^_" | egrep -v "WHITELIST" > .env.qa
  cat .env.qa
fi

printf "\n.env created with contents:\n"
