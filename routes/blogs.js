const express = require('express');
const router = express.Router();
const url = require('url');

const mongoose = require('mongoose');
const Blog = require('../models/blog');

mongoose.Promise = global.Promise;

router.get('/blogs', (req, res) => {
  console.log('Get request for all blogs');
  // console.log('req.body: ', req);
  var queryData = url.parse(req.url, true).query;
  // console.log('3. queryData: ', queryData);

  Blog.find({ 'author': queryData.author })
       .exec(function(err, blogs){
         if(err) {
           console.log('Error retrieving blogs');
         } else {
           res.json(blogs);
         }
       });
});

router.get('/blog/:id', (req, res) => {
  console.log('Get request for a single blog');
  // console.log('req.body: ', req.body);

  Blog.findById(req.params.id)
       .exec(function(err, blog){
         if(err) {
           console.log('Error retrieving blog');
         } else {
           res.json(blog);
         }
       });
});

router.post('/blog', function(req, res) {
  console.log('Post a blog');
  // console.log('req.body: ',req.body);

  var newBlog = new Blog();
  newBlog.title = req.body.title;
  newBlog.featuredImgUrl = req.body.featuredImgUrl;
  newBlog.content = req.body.content;
  newBlog.author = req.body.author;

  newBlog.save(function(err, insertedBlog) {
    if(err) {
      console.log('Error saving blog');
    } else {
      res.json(insertedBlog);
    }
  });
});

router.put('/blog/:id', function(req, res) {
  console.log('Update a blog');
  // console.log('req.body: ',req.body);

  Blog.findByIdAndUpdate(req.params.id, {
    $set: {
      title: req.body.title,
      featuredImgUrl: req.body.featuredImgUrl,
      content: req.body.content
    }
  }, {
    new: true
  }, function(err, updatedBlog) {
    if(err) {
      res.send('error updating blog');
    } else {
      res.json(updatedBlog);
    }
  });
});

router.delete('/blog/:id', function(req, res) {
  console.log('Deleting a blog');
  // console.log('req.body: ',req.body);
  Blog.findByIdAndRemove(req.params.id, function(err, deletedBlog) {
    if(err) {
      res.send('Error deleting blog');
    } else {
      res.json(deletedBlog);
    }
  });
});


module.exports = router;
