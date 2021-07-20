#!/bin/bash

VERSION=$(cat package.json | jq -r .version)

GIT_TAG_NAME="v${VERSION}"

GET_API_URL="https://api.github.com/repos/${GITHUB_REPOSITORY}/git/ref/tags/${GIT_TAG_NAME}"

HTTP_STATUS_CODE=$(curl -LI $GET_API_URL -o /dev/null -w '%{http_code}\n' -s \
  -H "Authorization: token ${GITHUB_TOKEN}")

if [ "$HTTP_STATUS_CODE" = "404" ]
then
  echo "Remote tag doesn't exist"
elif [ "$HTTP_STATUS_CODE" = "200" ]
then
  echo "Remote tag does exists"
  echo "Exiting"
  exit 1
else
  echo "There was a problem connecting to GitHub"
  echo "Exiting"
  exit 1
fi
