//We called necessary library for creating server.
const http = require('http');
const users = require('./data.json')

//Creating server
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json'); //handling response type as json
  res.write(JSON.stringify(users));
  res.end();
})

//Defining port number
const PORT = 5000;

//Listening server.
server.listen(PORT, ()=>{console.log(`Server ${PORT} portu üzerinde çalışmaya başladı.`);})