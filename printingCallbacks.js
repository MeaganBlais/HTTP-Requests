var https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML (options, callback) {
  var output = ""
  https.get(options, function(input) {
    input.setEncoding('utf8');
    input.on('data', function(data){
      output += data;
    });
    input.on('end', function(data) {
      callback(output);
    });
  })
}
// getAndPrintHTML(console.log)

function printHTML (html) {
  console.log(html);
    // code goes here
}
getHTML(requestOptions, printHTML)
