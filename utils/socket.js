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
					// chatListResponse.error = true;
					// chatListResponse.message = `User does not exits.`;
					// this.io.emit('chat-list-response', chatListResponse);
				} else {
					helper.getUserInfo(data.userId, (err, UserInfoResponse) => {
						delete UserInfoResponse.password;
						// two kinds of 'chat-list-response' events.
						helper.getChatList(socket.id, (err, response) => {
							this.io.to(socket.id).emit('chat-list-response', {
								error : false,
								singleUser : false,
								chatList : response
							}); // this.io.to(socket.id).emit('chat-list-response')
							socket.broadcast.emit('chat-list-response', {
								error : false,
								singleUser : true,
								chatList : UserInfoResponse
							}); // socket.broadcast.emit('chat-list-response')
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

      socket.on('add-message', (data) => {
        // console.log('message received at server', message);
        // this.io.emit('message', { type : 'new-message', msg : message });
        if (data.content === '') {
					this.io.to(socket.id)
              .emit(`add-message-response`, `Message cant be empty`);
				} else if (data.authorId === '') {
					this.io.to(socket.id)
              .emit(`add-message-response`, `Unexpected error, Login again.`);
				} else if (data.toAuthorId === '') {
					this.io.to(socket.id)
              .emit(`add-message-response`, `Select a user to chat.`);
				} else {
					let toSocketId = data.toSocketId;
					// let fromSocketId = data.fromSocketId;
					delete data.toSocketId;
		      // data.timestamp = Math.floor(new Date() / 1000);
					helper.insertMessages(data, (error , response) => {
						this.io.to(toSocketId).emit(`add-message-response`, data);
					});
				}
      });

    });
  }

  socketConfig() {
    this.io.use(function(socket, next) {
			let userID = socket.request._query['userId'];
    	let userSocketId = socket.id;
    	const data = {
    		id : userID,
    		value : {
  				socketId : userSocketId,
  				online : 'Y'
    		}
    	}
      User.addSocketId(data);
    	next();
    });

    this.socketEvents();
  }

}


module.exports = Socket;
