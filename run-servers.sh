#!/bin/bash

lsof -ti :8080 -i :3000 -i :4444 | grep  [1-9] | xargs kill

function runservers() {
	npm run selenium 
	npm run start:mock
	npm run server
}

#runservers &
