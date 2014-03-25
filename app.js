/* * Module dependencies */ 
var express = require('express');
var stylus = require('stylus');
var nib = require('nib') ;

var app = express();

function compile(str, path) { 
	return stylus(str).set('filename', path).use(nib()) ;
} 

var querystring = require('querystring');
var http = require('http');

function PostCode(codestring) {
  // Build the post string from an object
  var post_data = querystring.stringify({
      'compilation_level' : 'ADVANCED_OPTIMIZATIONS',
      'output_format': 'json',
      'output_info': 'compiled_code',
        'warning_level' : 'QUIET',
        'js_code' : codestring
  });

  // An object of options to indicate where to post to
  var post_options = {
      host: 'closure-compiler.appspot.com',
      port: '80',
      path: '/compile',
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': post_data.length
      }
  };

  // Set up the request
  var post_req = http.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
  });

  // post the data
  post_req.write(post_data);
  post_req.end();

}
var request = require('request');

request.post(
    'http://www.accounts.google.com/SignUp',
	    { form: { key: 'value' } },
    function (error, response, body) {
    	console.log(error);
    	console.log(response);
    	console.log(body);
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);
// PostCode("HI");
	
// // Queue a list of URLs
// c.queue(["http://jamendo.com/","http://tedxparis.com"]);

// Queue URLs with custom callbacks & parameters
// c.queue([{
// 	"uri":"http://parishackers.org/",
// 	"jQuery":true,

// 	// The global callback won't be called
// 	"callback":function(error,result) {
// 		// console.log($);
// 	    console.log("Grabbed",result.body.length,"bytes");
// 	}
// }]);

// // Queue some HTML code directly without grabbing (mostly for tests)
// c.queue([{
// 	 "html":"<p>This is a <strong>test</strong></p>"
// }]);

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev')); 
app.use(stylus.middleware( { src: __dirname + '/public' , compile: compile } ));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	// res.render('index', { title : 'Home' } );
	res.send('hi');
});

app.listen(3000) 


