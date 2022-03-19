const todos = require('../data/todos.json');


getAllTodos = () => {
  return todos;
};

getTodosByUserId = (userId) => {
  return todos.filter((todo) => todo.userId == userId);
}

module.exports = {
  getAllTodos,
  getTodosByUserId
}