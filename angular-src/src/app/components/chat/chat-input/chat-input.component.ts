import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../models/message';
import { ChatService } from '../../../services/chat.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {

  private message : Message;
  private messageContent : string;
  private to_author : string = '';

  @Input() author : string;

  constructor(private _chatService : ChatService) {
  }

  ngOnInit() {
  }

  sendMessage() {
    this.message = new Message(this.author, this.to_author, this.messageContent);
    this._chatService.sendMessage(this.message);
    this.messageContent = '';
  }

  checkKey(event) {
    if(event.keyCode == 13) {
        this.sendMessage();
    }
  }

}
