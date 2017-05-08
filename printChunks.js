var http = require('http');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/steps1.html'
  };
http.get(requestOptions, function (input) {
  input.setEncoding('utf8');
  input.on('data', function (data) {
    console.log('Chunk Received.', data)
  });
});

}

getAndPrintHTMLChunks ()
