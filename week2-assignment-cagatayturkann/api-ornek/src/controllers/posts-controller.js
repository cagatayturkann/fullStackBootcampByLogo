const posts = require('../data/posts.json');

getAllPosts = () => {
  return posts;
};

getPostById = (postId) => {
  return posts.filter(x=>x.id == postId);
}

module.exports = { getAllPosts, getPostById }