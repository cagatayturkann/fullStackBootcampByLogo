//calling express package
const epxress = require('express'); 
//calling controllers for datas
const postsController = require('./src/controllers/posts-controller');
const usersController = require('./src/controllers/users-controller');
const todosController = require('./src/controllers/todos-controller');

const app = epxress();

//requesting posts page
app.get('/posts', (req, res) => {
 let posts = postsController.getAllPosts();
 res.send(posts)
})

//filtering post by id via url
app.get('/posts/:postId', (req,res) => {
  let post = postsController.getPostById(req.params.postId);
  res.send(post)
})

//requesting users page
app.get('/users', (req,res) => {
  let users = usersController.getAllUsers();
  res.send(users);
})
//filtering user by id via url
app.get('/users/:userId', (req,res) => {
  let user = usersController.getUserById(req.params.userId);
  res.send(user)
})

app.get('/todos', (req,res) => {
  let todos; 
  if(req.query.userId) {
    todos = todosController.getTodosByUserId(req.query.userId);
  } else {
    todos = todosController.getAllTodos();
  }
  res.send(todos)
})

//Server is listening on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log('LISTENING ON PORT 5000')
})