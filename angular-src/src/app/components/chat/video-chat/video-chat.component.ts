import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { SocketService } from '../../../services/socket.service';
import { Broadcaster } from "../../../services/broadcast.service";

@Component({
  selector: 'app-video-chat',
  templateUrl: './video-chat.component.html',
  styleUrls: ['./video-chat.component.css']
})
export class VideoChatComponent implements OnInit {

  private selectedUserId = null;
  private selectedSocketId = null;
  private selectedUserName = null;
  private userId : string;
  private username : string = 'Default user name';
  private onlineUsers : Array<User> = [];

  constructor(private _socketService : SocketService,
              private _broadcaster: Broadcaster) {
    this._broadcaster.on('testclickevent').subscribe(message => {
      this._socketService.logout(this.userId).subscribe(res => {
      });
    });
  }

  ngOnDestroy() { }

  ngOnInit() {
    this.username = JSON.parse(localStorage.getItem('user'))['username'];
    this.userId = JSON.parse(localStorage.getItem('user'))['id'];
    this._socketService.connectSocket(this.userId);
    this._socketService.getChatList(this.userId).subscribe(res => {
      this.showChatListFromResponse(res);
    });
  }

  showChatListFromResponse(response) {
    if (!response.error) {
      if (response.singleUser) {
        if (this.onlineUsers.length > 0) {
          this.onlineUsers = this.onlineUsers.filter(function(obj) {
            return obj._id !== response.chatList._id;
          });
        }
        this.onlineUsers.push(response.chatList);
      } else if (response.userDisconnected) {
        this.onlineUsers = this.onlineUsers.filter(function(obj) {
          return obj.socketId !== response.socketId;
        });
      } else {
        this.onlineUsers = response.chatList;
      }
    } else {
      alert(`Chat list failure.`);
    }
  }

  onSelectUser(user) {
    this.selectedUserId = user._id;
    this.selectedSocketId = user.socketId;
    this.selectedUserName = user.username;
  }
  
}
