import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SocketService } from '../../../services/socket.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {

  private message : any;
  private messageContent : string;

  @Input() author : string;
  @Input() authorId : string;
  @Input() toAuthorId : string;
  @Input() toSocketId : string;
  @Output() NewMessage = new EventEmitter();

  constructor(private _socketService : SocketService,
              private _flashMessage : FlashMessagesService) {
  }

  ngOnInit() { }

  sendMessage() {
    if(!this.toAuthorId) {
      this.messageContent = '';
      this._flashMessage.show('Select a user to chat with', {
        cssClass: 'alert-danger',
        timeout: 3000
      });
      return;
    }
    this.message = {
      authorId : this.authorId,
      toAuthorId : this.toAuthorId,
      content : this.messageContent,
      toSocketId : this.toSocketId
    }
    this.NewMessage.emit(this.message);
    this._socketService.sendMessage(this.message);
    this.messageContent = '';
  }

  checkKey(event) {
    if(event.keyCode == 13) {
        this.sendMessage();
    }
  }

}
