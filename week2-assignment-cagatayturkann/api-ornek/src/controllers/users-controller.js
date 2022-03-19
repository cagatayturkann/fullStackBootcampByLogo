const users  = require('../data/users.json');


getAllUsers = () => {
  return users;
};

getUserById = (userId) => {
  return users.filter(x=>x.id == userId)
}
module.exports = { getAllUsers, getUserById }