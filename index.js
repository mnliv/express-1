var express = require('express');
const bodyParser = require('body-parser'); 

var userRoute = require('./routes/user.route');

var app = express();

var port = 3000;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(request, response){
	response.render('index', {
		name: 'AAA'
	})	
});

app.use('/users', userRoute);

app.listen(port, function(){
	console.log('Server listening on port ' + port);
})