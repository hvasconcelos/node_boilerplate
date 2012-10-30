var http = require('http');
var sys = require('sys');
var static = require('node-static');

var file = new static.Server('./public', { cache: false });

var server = http.createServer(function(request,response){

	request.addListener('end',function(){
		file.serve(request, response);
	});

});
server.listen(8000);

