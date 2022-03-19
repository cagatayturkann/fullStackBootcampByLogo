//We called necessary library for creating server.
const http = require('http');
const users = require('./data/users.json')
const posts = require('./data/posts.json')


//Creating server
const server = http.createServer((req, res) => {
  console.log(`Request succesfull : ${req.url}`);

  if (req.url === '/users') {
    //returning users.json
    res.setHeader('Content-Type', 'application/json'); //handling response type as json
    res.write(JSON.stringify(users));
    res.end();

  } else if (req.url === '/posts') {
    //returning posts.json
    res.setHeader('Content-Type', 'application/json'); //handling response type as json
    res.write(JSON.stringify(posts));
    res.end();
  } else {
    //returning 404
    res.writeHead(404, 'Content-Type', 'application/json')
    res.end(JSON.stringify({message: "Redirection Error"}));  
  }

})

//Defining port number
const PORT = 5000;

//Listening server.
server.listen(PORT, () => {
  console.log(`Server ${PORT} portu üzerinde çalışmaya başladı.`);
})