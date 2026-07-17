
const http = require('http');
const server = http.createServer((req,res) => {
	res.write('Hello This Node web server');
	res.end();
});
server.listen(3000, () => {
 console.log('This is Node web server runing');
});
