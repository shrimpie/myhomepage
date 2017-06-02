import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from '../../../models/message';
import { ChatService } from '../../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit, OnDestroy {

  private connection;
  private username : string = 'Default user';
  private messages : Array<Message> = [];

  constructor(private _chatService : ChatService) {
    this.username = JSON.parse(localStorage.getItem('user'))['username'];
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  ngOnInit() {
    this.connection = this._chatService.getMessages().subscribe(message => {
      console.log('chat service center received message:', message['msg']);
      this.messages.push(message['msg']);
    })
  }

}
