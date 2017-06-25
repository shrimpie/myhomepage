const path = require('path');
const url = require('url');
const passport = require('passport');
// jwt is used to generate token so a logged-in user can be remembered.
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Message = require('../models/message');


class MessageRoute {

  constructor (app) {
    this.app = app;
  }

  messageRoutes() {

    this.app.get('/messages', (req, res) => {
      var queryData = url.parse(req.url, true).query;
      let condition = {
        '$or' : [
          { '$and': [
              { 'authorId' : queryData.authorId },
              { 'toAuthorId' : queryData.toAuthorId }
            ]
          }, {
            '$and': [
              { 'authorId' : queryData.toAuthorId },
              { 'toAuthorId' : queryData.authorId }
            ]
          },
        ]
      }
      Message.find(condition).exec(function(err, messages) {
         if(err) {
           console.log('Error retrieving messages');
         } else {
           res.json(messages);
         }
      });
    });

    // this.app.get('*', function(req, res) {
    //     res.sendFile(path.join(__dirname, 'public/index.html'));
    // });
  }

  routesConfig() {
		this.messageRoutes();
	}
}


module.exports = MessageRoute;
