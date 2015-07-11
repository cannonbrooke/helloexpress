var express = require ('express');
var app = express();
var jade = require('jade');
var path = require('path');

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res){
  res.render('index', {title: 'Hey', message: 'You done did it now.'});
});

var server = app.listen(3000,function(){
  console.log('You done did it now');
});



