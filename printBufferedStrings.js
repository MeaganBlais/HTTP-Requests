var http = require('http');

function getAndPrintHTML() {
  var output = ""
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/steps1.html'
  };
  http.get(requestOptions, function(input) {
    output += input.setEncoding('utf8');
      output += input.on('data', function(data){
        input.on('end', function(data) {
          console.log('Chunks Received:', output)
        });
      });
  })
}
getAndPrintHTML()
