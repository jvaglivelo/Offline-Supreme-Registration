// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
const bodyParser = require('body-parser')


var open = false;
var region = "usa";


function Close() {
    var open = false;
    location.reload()
}

function Open() {
    var open = true;
}


//display correct page
app.get('/', function(request, response) {
  if (open){
    if(region == "usa"){
      response.sendFile(__dirname + '/usa/open.html');
    }else if (region == "paris"){
      response.sendFile(__dirname + '/paris/open.html');
    }else if (region == "london"){
      response.sendFile(__dirname + '/london/open.html');
    }
  }else {
      response.sendFile(__dirname + '/closed.html')
  }
});

//navigate to second form page
app.post('/customers', function(request, response) {
  response.json(request.body)
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
