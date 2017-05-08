var http = require('http');

function getAndPrintHTML() {
  var output = ""
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/steps1.html'
  };
  http.get(requestOptions, function(input) {
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
