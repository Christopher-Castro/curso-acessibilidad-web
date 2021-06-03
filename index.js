const express = require('express')
const app = express();
const path = require('path');
var port = process.env.PORT || 8000;

// Set static files
app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'));
app.use('/js',express.static(__dirname + 'public/js'));
app.use('/images',express.static(__dirname + 'public/images'));

//Set views
app.set('views', './views')
app.set('view engine', 'ejs')


app.get('/', function(req, res, next){
  
  res.render('final', {title: 'Portafolio, First page'})
});

const server = app.listen(port, function() {
  console.log(`Listening http://localhost:${server.address().port}`)
});


