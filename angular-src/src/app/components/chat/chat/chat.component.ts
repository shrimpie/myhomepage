import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../models/user';
import { Message } from '../../../models/message';
import { SocketService } from '../../../services/socket.service';
import { MessageService } from '../../../services/message.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [SocketService, MessageService]
})
export class ChatComponent implements OnInit, OnDestroy {

  private selectedUserId = null;
  private selectedSocketId = null;
  private selectedUserName = null;
  private userId : string;
  private username : string = 'Default user name';

  private messages : Array<Message> = [];
  private onlineUsers : Array<User> = [];

  private socketCon = null;

  constructor(private _socketService : SocketService,
              private _messageService : MessageService) {
  }

  ngOnDestroy() {
    this.socketCon.unsubscribe();
  }

  ngOnInit() {
    this.username = JSON.parse(localStorage.getItem('user'))['username'];
    this.userId = JSON.parse(localStorage.getItem('user'))['id'];

    this._socketService.connectSocket(this.userId);
    this._socketService.getChatList(this.userId).subscribe(
      res => {
        this.showChatListFromResponse(res);
      }
		);
    this.subscribeForMessages();
  }
  //
  showChatListFromResponse(response) {
    if (!response.error) {
      // add newly connected user to chat list
      if (response.singleUser) {
        // remove same user if exists in the chat lists of other users.
        if (this.onlineUsers.length > 0) {
          this.onlineUsers = this.onlineUsers.filter(function(obj) {
            return obj._id !== response.chatList._id;
          });
        }
        // then add it to chat list
        this.onlineUsers.push(response.chatList);
      } else if (response.userDisconnected) {
        // when user logs out, (a userDisconnected attribute will be set),
        // remove the user from others' chat lists.
        this.onlineUsers = this.onlineUsers.filter(function(obj) {
          return obj.socketId !== response.socketId;
        });
      } else { // Updating entire chatlist if user logs in.
        this.onlineUsers = response.chatList;
      }
    } else {
      alert(`Chat list failure.`);
    }
  }

  subscribeForMessages() {
    this.socketCon = this._socketService.receiveMessages().subscribe(
      response => {
        if(this.selectedUserId &&
           this.selectedUserId == response.authorId) {
          // console.log('Got a new message: ', response);
          this.messages.push(response);
          this.showNewestMessages();
        }
    });
  }

  onSelectUser(user) {
    this.selectedUserId = user._id;
    this.selectedSocketId = user.socketId;
    this.selectedUserName = user.username;
    // get the messages for selected user.
    this._messageService.getMessages({
      authorId: this.userId,
      toAuthorId : this.selectedUserId
    }).subscribe(res => {
      this.messages = res;
      this.showNewestMessages();
    });

  }

  onNewMessage(message) {
    this.messages.push(message);
    this.showNewestMessages();
  }

  showNewestMessages() {
    setTimeout(() => {
      $('#message-container').animate({
        scrollTop: $('#message-container')[0].scrollHeight
      }, 1000, function() {
        console.log('Animation complete');
      });

    }, 100);

  }

}
