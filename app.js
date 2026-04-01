const http = require('http');

http.createServer(function(req,res){

	res.write("Hello World! Something big is coming.....");
	res.end();




}
	

).listen(3000);


console.log("Server Started on port 3000");
