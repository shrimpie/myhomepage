'use strict';
const User = require('../models/user');
const helper = require('./helper');


class Socket {

  constructor (socket) {
    this.io = socket;
  }

  socketEvents() {

    this.io.on('connection', (socket) => {
      console.log('A user is connected');
      socket.on('chat-list', (data) => {
				let chatListResponse = {};
				if (data.userId == '') {
					chatListResponse.error = true;
					chatListResponse.message = 'User does not exits.';
					this.io.emit('chat-list-response', chatListResponse);
				} else {
					helper.getUserInfo(data.userId, (err, UserInfoResponse) => {
						delete UserInfoResponse.password;
						helper.getChatList(socket.id, (err, response) => {
              // Response to the newly logged in user.
							this.io.to(socket.id).emit('chat-list-response', {
								error : false,
								singleUser : false,
								chatList : response
							});
              // Response to other online users so they can update their lists.
							socket.broadcast.emit('chat-list-response', {
								error : false,
								singleUser : true,
								chatList : UserInfoResponse
							});
						}); // getChatList
					}); // getUserInfo
				} // else
		  }); // chat-list

      socket.on('disconnect', function() {
        console.log('The user is disconnected');
        socket.broadcast.emit('chat-list-response', {
					error : false,
					userDisconnected : true,
					socketId : socket.id
				});
      });

      // Handles when clients add new messages
      socket.on('add-message', (data) => {
        if (data.content === '') {
					this.io.to(socket.id)
              .emit('add-message-response', 'Message cant be empty');
				} else if (data.authorId === '') {
					this.io.to(socket.id)
              .emit('add-message-response', 'Unexpected error, Login again.');
				} else if (data.toAuthorId === '') {
					this.io.to(socket.id)
              .emit('add-message-response', 'Select a user to chat.');
				} else {
					let toSocketId = data.toSocketId;
					delete data.toSocketId;
					helper.insertMessages(data, (error , response) => {
						this.io.to(toSocketId).emit('add-message-response', data);
					});
				} // else
      }); // 'add-message'

    });
  }

  socketConfig() {
    // This works like registering a middleware, so each connected socket got
    // a socketId written to the database, so I can remember which user uses
    // which socket, thus private chat.
    this.io.use(function(socket, next) {
			let userID = socket.request._query['userId'];
    	let userSocketId = socket.id;
    	const data = {
    		id : userID,
				socketId : userSocketId,
				online : 'Y'
    	}
      User.addSocketId(data);
    	next();
    });
    this.socketEvents();
  }

}


module.exports = Socket;
