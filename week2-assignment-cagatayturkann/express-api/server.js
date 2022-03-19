//calling express package
const epxress = require('express');
//calling data files
const users = require('./data/users.json');
const posts = require('./data/posts.json');


const app = epxress();

//requesting users page
app.get('/users', (req, res) => {
  if (req.query.id) { //checking if query.id exist or not
    let item = users.filter(x => x.id == req.query.id); //if query.id exist filter users by id
    res.send(item);
  } else { //if query.id non exist show all users
    res.send(users)
  }
})

//requesting posts page and querying postId
app.get('/posts/:postId', (req, res) => {
  console.log(req.params.postId);
  let result;
  result = posts.filter(x => x.id == req.params.postId) //filtering posts by id value
  res.send(result) //showing results
})


//Server is listening on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log('LISTENING ON PORT 5000')
})