var http = require('http');

function getAndPrintHTML (options) {
  var output = ""
  var options = {host:'', path:''};
  http.get(requestOptions, function(input) {
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
