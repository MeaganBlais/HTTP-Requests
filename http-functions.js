var https = require('https');

module.exports = function getHTML (options, callback) {
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
/* Your code here */
