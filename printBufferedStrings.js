var https = require('https');

function getAndPrintHTML() {
  var output = ""
  var requestOptions = {
    host: 'sytantris.github.io',
     path: '/http-examples/step2.html'
  };
  https.get(requestOptions, function(input) {
    input.setEncoding('utf8');
    input.on('data', function(data){
      output += data;
    });
    input.on('end', function(data) {
      console.log('Chunks Received:', output)
    });
  })
}
getAndPrintHTML()
