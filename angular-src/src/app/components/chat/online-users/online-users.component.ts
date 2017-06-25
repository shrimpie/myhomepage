import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-online-users',
  templateUrl: './online-users.component.html',
  styleUrls: ['./online-users.component.css']
})
export class OnlineUsersComponent implements OnInit {

  @Input() onlineUsers : User[];
  @Input() selectedUserId : String;

  @Output()
  SelectUser = new EventEmitter();


  constructor() { }

  ngOnInit() { }

  onSelectUser(user) {
    this.SelectUser.emit(user);
  }

  isUserSelected(userId) {
    if(!this.selectedUserId) { return false; }
    return this.selectedUserId === userId ? true : false;
  }

}
