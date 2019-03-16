#!/usr/bin/env bash

cd techdebt-fe
yarn install
yarn build
mkdir -p ../src/main/resources/public/
cp -R build/ ../src/main/resources/public/
