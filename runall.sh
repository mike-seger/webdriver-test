#!/bin/bash

arg="--silent"
if [ "$1" == "debug" ] ; then
	arg=""
else
	exec &>/dev/null
fi

npm run $arg mock-kill
(npm run $arg mock-start 2>&1 &) 
npm $arg run wait4ports
npm $arg run test
npm run $arg mock-kill

(( out_fd > 2 )) && exec {out_fd}>&-
