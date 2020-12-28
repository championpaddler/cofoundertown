const blogBuilder = require('../controllers/blogController');

module.exports = app => {
  app
    .route('/blogs')
    .get(blogBuilder.list_all_blogs)
    .post(blogBuilder.create_a_blog);

  app
    .route('/blogs/:blogId')
    .get(blogBuilder.read_a_blog)
    .put(blogBuilder.update_a_blog)
    .delete(blogBuilder.delete_a_blog);
};