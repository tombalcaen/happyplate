var request = require("request");
//Install express server
const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/happyplate'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var mailchimpInstance   = 'us16',
    listUniqueId        = 'c5cf54f301';

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  //res.header('Access-Control-Allow-Headers', 'Authorization');
  next();
}
app.use(allowCrossDomain);

app.get('/*', function(req,res) {
//res.sendFile(path.join(__dirname+'/dist/happyplate/index.html'));
});

// Start the app by listening on the default Heroku port
var server = app.listen(process.env.port||3000,()=>{ //8080
  console.log("App now running on port", server.address().port);
  console.log(__dirname)
});

app.post('/signup', function (req, response) {
  var options = { method: 'POST',
    url: 'https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/',
    headers: 
    { 'cache-control': 'no-cache',
      Authorization: 'Basic YW55c3RyaW5nOjg3MmY4ZTJjYjdiYzBlODAyNjNkMjE1MjkwYmFmZTQ0LXVzMTY=',
      'Content-Type': 'application/json' },
    body: { email_address: req.body.email, 
            status: 'subscribed',
            // merge_fields: {
            //   'NAME': req.body.name,
            // } 
          },
    json: true };

  request(options, function (error, res, body) {
    if (error) throw new Error(error);
    console.log("test: " + res.statusCode)    
    if (res.statusCode < 300 || (res.statusCode === 400 && res.body.title === "Member Exists")) {      
      console.log("success!!!!")
      response.json({success: true, message:'Signed Up!'});
    } else {
      console.log(body)
      response.json({success: false, message:'sign up failed!'});      
    }
  });
});