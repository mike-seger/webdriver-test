#!/bin/bash

npm run --silent mock-kill >/dev/null
(npm run --silent mock-start 2>&1 >/dev/null &) >/dev/null
npm --silent run wait4ports
npm --silent run test
npm run --silent mock-kill >/dev/null
