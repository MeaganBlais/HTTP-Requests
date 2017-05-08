var https = require('https');

function getAndPrintHTML (options) {
  var output = "";
  https.get(options, function(input) {
    input.setEncoding('utf8');
    input.on('data', function(data){
      output += data;
    });
    input.on('end', function(data) {
      console.log('Chunks Received:', output)
    });
  });
}
var requestOptions = {
  host: 'sytantris.github.io',
   path: '/http-examples/step3.html'
};


getAndPrintHTML(requestOptions)
