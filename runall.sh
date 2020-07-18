#!/bin/bash

set -eE

arg="--silent"
exec 3>&1 4>&2
if [ "$1" == "debug" ] ; then
	arg=""
fi

function err_report() {
	printf "\nError on line $1\n"
	if [ "$arg" != "" ] ; then echo "For more details, run: $0 debug"; fi 
}

trap 'err_report $LINENO' ERR

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
