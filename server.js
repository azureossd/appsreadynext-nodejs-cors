var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');

app.use(bodyParser.json());

function getUsers(){
    var id = randomInteger(1, 5) 
    if (id != 3) {
        var users =  [
            { "name":randomString(), "lastname": randomString() },
            { "name":randomString(), "lastname": randomString() },
            { "name":randomString(), "lastname": randomString() }
          ]
          return users;
    } else {
        throw new Error ("Can't get users...")
    }   
}

function randomString() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

app.get('/', function(req, res) {
    res.json({ users: getUsers() });   
});

var port = process.env.PORT || 3000;    

app.listen(port, function () {
    console.log(`Server running at http://localhost:${port}`);
});