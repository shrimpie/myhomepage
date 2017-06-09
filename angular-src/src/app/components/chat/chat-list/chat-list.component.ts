import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../../models/message';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  @Input() messages: Message[];
  @Input() author: string;
  @Input() userId: string;
  @Input() selectedUser: string;

  constructor() {
  }

  ngOnInit() {
  }

  isSelfMessage(msg) {
    return this.userId === msg.authorId ? true : false;
  }

}
