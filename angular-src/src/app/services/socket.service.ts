import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  private BASE_URL = '/';
  public socket = null;

  constructor() {
  }

  connectSocket(userId : string) {
    this.socket = io(this.BASE_URL, { query : `userId=${userId}` });
  }

  getSelfSocketId() {
    this.socket.emit('self-socket-id');
    let observable = new Observable(observer => {
      this.socket.on('self-socket-id-response', (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect();};
    });
    return observable;
  }

  getChatList(userId : string) : any {
    this.socket.emit('chat-list' , { userId : userId });
    let observable = new Observable(observer => {
      this.socket.on('chat-list-response', (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect();};
    });
    return observable;
  }

  sendMessage(message : any) : void {
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

  logout(userId) : any {
    if(!this.socket) {
    }
    this.socket.emit('logout', userId);
    let observable = new Observable(observer => {
      this.socket.on('logout-response', (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });
    return observable;
  }


  /// below are for video connection usage
  sendMessageForVideoConnection(data) {
    // console.log('Client sending message: ', data.msg);
    this.socket.emit('message', data);
  }

  connectToSocketId(sid) {
    console.log('trying to connect to socket id: ', sid);
    this.socket.emit('connect-socket-request', {
      toSocketId: sid
    });
    let observable = new Observable(observer => {
      this.socket.on('connect-socket-reply', (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });
    return observable;
  }

  confirmConnectionToSocketId(tsid) {
    console.log('Confirm connection to socket id: ', tsid);
    this.socket.emit('connect-socket-answer', {
      ready: 'Y',
      toSocketId: tsid
    });
  }

  onSocketConnectionRequest() {
    let observable = new Observable(observer => {
      this.socket.on('connect-socket-relay', (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });
    return observable;
  }

  onMessage() {
    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });
    return observable;
  }

}
