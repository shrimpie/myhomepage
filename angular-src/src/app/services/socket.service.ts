import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  private BASE_URL = 'http://localhost:3000';
  private socket;

  constructor() {}

  connectSocket(userId : string) {
    this.socket = io(this.BASE_URL, { query : `userId=${userId}` });
  }

  getChatList(userId : string) : any {
    this.socket.emit('chat-list' , { userId : userId });
    let observable = new Observable(observer => {
      this.socket.on('chat-list-response', (data) => { observer.next(data); });
      return () => { this.socket.disconnect(); };
    });
    return observable;
  }

  sendMessage(message : any) : void {
    // console.log('socket.service.ts sendMessage | message:', message);
    this.socket.emit('add-message', message);
  }

  receiveMessages() : any {
    let observable = new Observable(observer => {
      this.socket.on('add-message-response', (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });
    return observable;
  }



}
