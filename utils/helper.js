'use strict';
const User = require('../models/user');
const Message = require('../models/message');

class Helper {

	constructor() {
	}

	getUserInfo(userId, callback) {
		User.findOne({
			_id : userId
		}, (err, result) => {
			callback(err,result);
		});
	}

	getChatList(useeSocketId, callback) {
		User.find({
			'online' : 'Y',
			socketId : { $ne : useeSocketId }
		}, (err, result) => {
			callback(err, result);
		});
	}

	insertMessages(data, callback) {
		let msg = new Message(data);
		msg.save(function(err, res) {
			if(err) {
				console.log('helper.js | insertMessages | err:', err);
			} else {
				callback(err, res);
			}
		})
	}

	//
	getMessages(userId, toUserId, callback) {
		const data = {
      '$or' : [
      	{ '$and': [
      			{ 'toAuthor' : toUserId },
						{ 'author' : userId }
      		]
      	}, {
      		'$and': [
      			{ 'toAuthor' : userId },
						{ 'author' : toUserId }
      		]
      	},
      ]
    };
		Message.find(data).sort({
			'timestamp': 1
		}, (err, result) => {
      callback(err, result);
		});
	}

}

module.exports = new Helper();
