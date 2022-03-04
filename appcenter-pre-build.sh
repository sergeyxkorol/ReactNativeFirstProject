#!/usr/bin/env bash
# Creates an .env from existing env files for use with react-native-config
# based on branch
if [  "$APPCENTER_BRANCH" == "master" ]; then
   cp .env.production .env
else
   cp .env.qa .env
fi

printf "\n.env created with contents:\n"
cat .env