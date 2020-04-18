const express = require('express');
const shortid = require('shortid');

const db = require('../db');

var router = express.Router();

router.get('/', function(req, res){
	res.render('users/index', {
		users: db.get('users').value()
	});
});

router.get('/search', function(req, res){
	var q = req.query.q;
	var matchedUsers = db.get('users').value().filter(function(user){
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	})

	res.render('users/index', {
		users: matchedUsers,
		currentSearch: q
	});
});

router.get('/create', function(req, res){
	res.render('users/create')
});

router.get('/:id', function(req, res){
	var id = req.params.id;
	var user = db.get('users').find({id: id}).value();
	res.render('users/view', {
		user: user
	});
});

router.post('/create', function(req, res){
	req.body.id = shortid.generate();
	db.get('users').push(req.body).write();
	res.redirect('/users')
});

module.exports = router;