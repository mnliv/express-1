var express = require('express');
var app = express();
const bodyParser = require('body-parser');

var port = 3000;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './views');

var users = [
			{ id: 1, name: 'Nhan' },
			{ id: 2, name: 'Lien'},
			{ id: 3, name: 'Duc'}
		];

app.get('/', function(request, response){
	response.render('index', {
		name: 'AAA'
	})	
});

app.get('/users', function(req, res){
	res.render('users/index', {
		users: users
	});
});

app.get('/users/search', function(req, res){
	var q = req.query.q;
	var matchedUsers = users.filter(function(user){
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	})

	res.render('users/index', {
		users: matchedUsers,
		currentSearch: q
	});
});

app.get('/users/create', function(req, res){
	res.render('users/create')
});

app.post('/users/create', function(req, res){
	users.push(req.body);
	res.redirect('/users')
});

app.listen(port, function(){
	console.log('Server listening on port ' + port)
})