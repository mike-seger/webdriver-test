#!/bin/bash

arg="--silent"
exec 3>&1 4>&2
if [ "$1" == "debug" ] ; then
	arg=""
fi

function silenceOn() { if [ "$arg" != "" ] ; then exec &>/dev/null; fi }
function silenceOff() { if [ "$arg" != "" ] ; then exec 1>&3 2>&4; fi }

silenceOn
npm run $arg mock-kill
(npm run $arg mock-start 2>&1 &) 
npm $arg run wait4ports
silenceOff
npm $arg run test
silenceOn
npm run $arg mock-kill
