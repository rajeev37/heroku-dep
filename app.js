var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
const APPPORT = process.env.PORT || "3000";

var routes = express.Router();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/dist'));



app.get('*/', function(req, res){
    res.sendFile(__dirname + '/dist/index.html');
});


app.listen(3000, function(){
    console.log(" Server started !!!!!");
})