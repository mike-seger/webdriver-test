var waitOn = require('wait-on');

var args = process.argv.slice(2);
var opts = {
  resources: args,
  delay: 500, // initial delay in ms, default 0
  interval: 100, // poll interval in ms, default 250ms
  timeout: 30000, // timeout in ms, default Infinity
  tcpTimeout: 1000, // tcp timeout in ms, default 300ms
  window: 500, // stabilization time in ms, default 750ms 
};

async function wait4ports() {
  try {
    await waitOn(opts);
  } catch (err) {
    console.log('Error occurred: ' + err)
    process.exit(-1);
  }
}

wait4ports();