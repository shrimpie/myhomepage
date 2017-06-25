const url = require('url');
const mongoose = require('mongoose');
const Blog = require('../models/blog');

// using native promises
mongoose.Promise = global.Promise;

class BlogRoute {

  constructor (app) {
    this.app = app;
  }

  blogRoutes() {

    this.app.get('/blogs', (req, res) => {
      var queryData = url.parse(req.url, true).query;
      Blog.find({ 'author': queryData.author })
          .exec(function(err, blogs) {
            if(err) {
             console.log('Error retrieving blogs');
            } else {
             res.json(blogs);
            }
          });
    });

    this.app.get('/blog/:id', (req, res) => {
      Blog.findById(req.params.id)
          .exec(function(err, blog){
            if(err) {
              console.log('Error retrieving blog');
            } else {
              res.json(blog);
            }
          });
    });

    this.app.post('/blog', function(req, res) {
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

    this.app.put('/blog/:id', function(req, res) {
      Blog.findByIdAndUpdate(req.params.id, {
        $set: {
          title: req.body.title,
          featuredImgUrl: req.body.featuredImgUrl,
          content: req.body.content
        }
      }, { new: true }, function(err, updatedBlog) {
        if(err) {
          res.send('error updating blog');
        } else {
          res.json(updatedBlog);
        }
      });
    });

    this.app.delete('/blog/:id', function(req, res) {
      Blog.findByIdAndRemove(req.params.id, function(err, deletedBlog) {
        if(err) {
          res.send('Error deleting blog');
        } else {
          res.json(deletedBlog);
        }
      });
    });

  }

  routesConfig() {
		this.blogRoutes();
	}

}


module.exports = BlogRoute;
