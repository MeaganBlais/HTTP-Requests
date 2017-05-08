var http = require('http');
var https = require('https');

function getAndPrintHTMLChunks () {
  var requestOptions = {
    host: 'sytantris.github.io',
     path: '/http-examples/step1.html'
  };
  https.get(requestOptions, function(input) {
    console.log(input);
    input.setEncoding('utf8');
    input.on('error', function(err){
      console.log(err);
    })
    .on('data', function(data) {
      console.log('Chunk Received: ' + data + "\n")
    });
  });

}

getAndPrintHTMLChunks()
