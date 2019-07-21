var portscanner = require('portscanner')
 
//portscanner.findAPortInUse([5000, 3000, 4444], function(error, port) {
var args = process.argv.slice(2);
portscanner.findAPortInUse(args, function(error, port) {
  if ( ! port === false ) {
    console.log('PORT IN USE AT: ' + port)
    process.exit(-1);
  }
})
