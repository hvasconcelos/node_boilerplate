var http = require('http');
var sys = require('sys');
var static = require('node-static');

function Application(options){
	
	if(! (this instanceof arguments.callee )){
		return new arguments.callee(arguments);
	} 	
	var self = this;
	self.settings = {
		port: options.port
	}
	self.init();
};

Application.prototype.init= function(){
	
	var self = this;
	file = new static.Server('./public', { cache: false });
        self.server = http.createServer(function(request,response){

        request.addListener('end',function(){
                file.serve(request, response);
        });

        });
        self.server.listen(self.settings.port);
}

module.exports = Application;
