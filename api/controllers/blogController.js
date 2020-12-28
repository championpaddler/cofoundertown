const mongoose = require('mongoose');
const blog = mongoose.model('blog');



exports.list_all_blogs = (req, res) => {
  blog.find({}, (err, blogs) => {
    if (err) res.send(err);
    res.json(blogs);
  });
};

exports.create_a_blog = (req, res) => {
  const newblog = new blog(req.body);
  newblog.save((err, blog) => {
    if (err) res.send(err);
    res.json(blog);
  });
};

exports.read_a_blog = (req, res) => {
  blog.findById(req.params.blogId, (err, blog) => {
    if (err) res.send(err);
    res.json(blog);
  });
};

exports.update_a_blog = (req, res) => {
  blog.findOneAndUpdate(
    { _id: req.params.blogId },
    req.body,
    { new: true },
    (err, blog) => {
      if (err) res.send(err);
      res.json(blog);
    }
  );
};

exports.delete_a_blog = (req, res) => {
  blog.deleteOne({ _id: req.params.blogId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'blog successfully deleted',
      _id: req.params.blogId
    });
  });
};