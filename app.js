/* * Module dependencies */ 
var express = require('express');
var fs = require('fs');
var http = require('http');

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

var request = require('request');
var cheerio = require('cheerio');

var stuffForForm = {};

request('https://accounts.google.com/SignUp', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    console.log("check it: " + $("form#createaccount").attr('action'));          
    stuffForForm['dsh'] = "hi";

    // $('span').each(function(i, element){
    // });
  }else{
    console.log('error: ' + error);
  }
});

function sendRequest(){
  request.post(
//       'http://localhost:3000/testPost',
        'http://accounts.google.com/SignUp',
        { form: {
          service:'',
          timeStmp: '1396241453661',
          secTok: '.AG5fkS8mN0srSLaZv4XHYNNpT_3KAI2hzQ%3D%3D',
          dsh: '1039293799154494427',
          ktl: 'A',
          ktf: 'FirstName+LastName+GmailAddress+Passwd+PasswdAgain+RecoveryEmailAddress+',
          _utf8: '%E2%98%83',
          bgresponse: '%21A0LvIogMN-Q3cURNUKAsKNS3YwIAAABgUgAAAG8qAqVFyOSG1N0PYSO2zojM2wXJlyW82ya7j7nu0yoHH_GNfzaodmcn4zA8BB2-d0F4jvJbbNvn5D3HFoSy088oF5UG7hvdrhEeNgt7IVYdrYAj0JWKcUZVIYTGqY9qipmRyFk_YEWdAiJNB1lXAJUobyD4HyD_9Ne9Tae6TIYlcrV7Vv_xemP5nt5RK4PNrrX28nhEmJXyqzCQn9BorbNj2-DRZjTS2pb-rJhYK994RU-rWOkiL6TwOybUEzAZMwuODhUvdg0h3prXm0Wq8TLhsQ2sh9rl1pfR2miHUnXT7qBBomOTDPljDSELAwbzxzm2NL1RjlEZz9F3hWuhpnHjomB98R8-IC1eMz25QH1kXdeIHLgYzYVpH0JTuA8yisSPtLL997idWEcqN4V26-td3k53uhBFRXlaNLfxgmRiSh4O7fXMJycxxTtgb1Sy8vtY7UFJUuOgAsxYPG2V67_PrPvLY36jHz9W5C9Y93Pa0ZlRsEtGv6-jOyRh35FRkc-ioxnOTF9kMwe-S7zgii0p8tRfl7x0c1Bf_vhEmDc4fbZBcfb6RORLGGAzHDNmDNehYet42i8fvZQ18UIDEPLrgjFS7TjZs0ji2HG0BmEOpJbMyqxHqgZqeD-PQzUgkvz_Ne7SYdfp6JN4r1qn60kFoKWOVui-15xdLXLT3iYANOZ1RnUIDTPitojbee-Ztjz16saYDFv9emP8dYzuaIstkMdRi9mDkODZLfhI40W_rNa4dQmkaWqPTvf67YKNvuQYRFOXAarcr2ytxY9iK_8AkPol7u0ibcxquA48_ODhjhIo6R0xscdgaK1e3FzF7u0ny5a9y6z_wej2trfd0QJYKZHgkCzsH7ALrGjUVVIMkFJ0LWCBn-PMXzNyqzqTUU43ZU7IygyUGA',
          FirstName: '',
          LastName: '',
          GmailAddress: '',
          Passwd: '',
          PasswdAgain: '',
          BirthMonth: '',
          BirthDay: '',
          BirthYear: '',
          Gender: '',
          RecoveryPhoneCountry: 'US',
          RecoveryPhoneNumber: '',
          RecoveryEmailAddress: '',
          signuptoken: '03AHJ_VuvmltFKNnB4cHTB7HN5kPyeoPqlr9FlLOu-6iPEjtyVfDSxlzJ3bZvdtKMnTnM2lfusxutigiQB1Lvb5BIkpADLUgz1uGzwD8zWB5XRmMYQqBL7RPtbXzcnE_Cd27mtMv0GbdOcw1EvmN3JVZeoeT84Ox4IztV1dKKG9twU-xSmofkH0X3A1LqkLyl7oFZifYWwwwsC',
          signuptoken_audio: '03AHJ_VuvmltFKNnB4cHTB7HN5kPyeoPqlr9FlLOu-6iPEjtyVfDSxlzJ3bZvdtKMnTnM2lfusxutigiQB1Lvb5BIkpADLUgz1uGzwD8zWB5XRmMYQqBL7RPtbXzcnE_Cd27mtMv0GbdOcw1EvmN3JVZeoeT84Ox4IztV1dKKG9twU-xSmofkH0X3A1LqkLyl7oFZifYWwwwsC',
          signupcaptchaStats: 'gmfcFMS20IO3Vu0jlqD-nHT_Lo24fSX-3Kg1yBkdTy0%3AkHErz4h41p0jgSZGaTzl-g',
          recaptchaKeyVersion: '0',
          recaptcha_challenge_field: '03AHJ_VuvmltFKNnB4cHTB7HN5kPyeoPqlr9FlLOu-6iPEjtyVfDSxlzJ3bZvdtKMnTnM2lfusxutigiQB1Lvb5BIkpADLUgz1uGzwD8zWB5XRmMYQqBL7RPtbXzcnE_Cd27mtMv0GbdOcw1EvmN3JVZeoeT84Ox4IztV1dKKG9twU-xSmofkH0X3A1LqkLyl7oFZifYWwwwsC',
          recaptcha_response_field: '',
          CountryCode: 'US',
          TermsOfService: 'yes'
        } },
       function (error, response, body) {
//        console.log(error);
//        console.log(response);
//        console.log(body);
         console.log(response.statusCode);
         console.log(response);
         if (!error && response.statusCode == 200) {
//             console.log()
         }
       }
  );
}

app.post('/testPost', function (req, res){
  console.log("test post was pinged");
  console.log(req);
  res.send("dicks");
});

app.post('/SignUp?dsh=3470426308945225570&service', function(req, res){
  console.log('hit google spoof sign up');
  console.log(req);
});

app.post('/*', function(req,res){
  console.log(req);
  res.send('EAT IT GOOGLE');
});

app.get('/', function (req, res) {
	res.sendfile(__dirname + "\\googleSignUp.html");
});

http.createServer(app).listen(3000);

var Browser = require("zombie");
browser = new Browser()
browser.visit("http://accounts.google.com/signup", function () {
  browser.
    fill("FirstName", "Thomas").
    fill("LastName", "Nattestad").
    fill("GmailAddress", "thomasstorage3").
    fill("Passwd", "Bammer22").
    fill("PasswdAgain", "Bammer22").
    fill("BirthMonth", "July").
    fill("BirthDay", "30").
    fill("BirthYear", "1993").
    fill("Gender", "Male").
    fill("RecoveryPhoneNumber", "4158278955").
    check("SkipCaptcha").
    check("TermsOfService").
    pressButton("Next step", function(){
      console.log(browser.statusCode);
      console.log(browser.error);
      console.log(browser.body);
    });
  console.log("submitted form");
});


//sendRequest();
