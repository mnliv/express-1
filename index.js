var express = require('express');
var app = express();

var port = 3000;

app.get('/', function(request, response){
	response.send('Hello coder')	
})

app.listen(port, function(){
	console.log('Server listening on port ' + port)
})