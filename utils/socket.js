'use strict';
const User = require('../models/user');
const helper = require('./helper');


class Socket {

  constructor (socket) {
    this.io = socket;
  }

  socketEvents() {

    this.io.on('connection', (socket) => {
      // console.log('A user is connected');

      socket.on('self-socket-id', () => {
        socket.emit('self-socket-id-response', socket.id);
      });

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

      socket.on('disconnect', () => {
        socket.broadcast.emit('chat-list-response', {
					error : false,
					userDisconnected : true,
					socketId: socket.id
				});
      });

      // Handles when clients add new messages
      socket.on('add-message', (data) => {
        if (data.content === '') {
					this.io.to(socket.id)
                 .emit('add-message-response', 'Message cant be empty');
                 // message checking should be done in the client, right?
                 // same with below two checkings.
				} else if (data.authorId === '') {
					this.io.to(socket.id)
                 .emit('add-message-response', 'Unexpected error, Login again');
				} else if (data.toAuthorId === '') {
					this.io.to(socket.id)
                 .emit('add-message-response', 'Select a user to chat');
				} else {
					let toSocketId = data.toSocketId;
					delete data.toSocketId;
					helper.insertMessages(data, (error , response) => {
						this.io.to(toSocketId).emit('add-message-response', data);
					});
				} // else
      }); // on 'add-message'

      // Logout the user
      socket.on('logout', (userId) => {
        helper.logout(userId, (error, result) => {
          this.io.to(socket.id).emit('logout-response', {
            error : false
          });
          socket.broadcast.emit('chat-list-response',{
            error : false,
            userDisconnected : true,
            socketId : socket.id
          });
        });
      });

      ///////// below are for video chat usage ///////
      socket.on('connect-socket-request', (data) => {
        if(this.io.sockets.connected[data.toSocketId]) {
          this.io.sockets.connected[data.toSocketId].emit(
            'connect-socket-relay', {
              fromSocketId: socket.id
            });
        } else {
          console.log('relay: no such socket id alive');
        }
      });

      socket.on('connect-socket-answer', (data) => {
        if(this.io.sockets.connected[data.toSocketId]) {
          this.io.sockets.connected[data.toSocketId].emit(
           'connect-socket-reply', {
              ready: 'Y',
              fromSocketId: socket.id
            })
        } else {
          console.log('reply: no such socket id alive');
        }
      });

      socket.on('message', (data) => {
        if(this.io.sockets.connected[data.toSocketId]) {
          this.io.sockets.connected[data.toSocketId].emit('message', data);
        }
      });

    });
  }

  socketConfig() {
    // This works like registering a middleware, so each connected socket got
    // a socketId written to the database, so I can remember which user uses
    // which socket, thus private chat.
    this.io.use(function(socket, next) {
			let userId = socket.request._query['userId'];
    	let userSocketId = socket.id;
    	const data = {
    		id : userId,
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
