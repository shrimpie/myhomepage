import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  // private BASE_URL = '/';
  // when deploying to heroku, use above.

  private port = process.env.PORT || 8080;
  private BASE_URL = 'http://localhost:' + this.port + '/';
  public socket = null;

  constructor() { }

  connectSocket(userId : string) {
    this.socket = io(this.BASE_URL, { query : `userId=${userId}` });
  }

  getObservable(eventName) {
    let observable = new Observable(observer => {
      this.socket.on(eventName, (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect();};
    });
    return observable;
  }

  getSelfSocketId() {
    this.socket.emit('self-socket-id');
    return this.getObservable('self-socket-id-response');
  }

  getChatList(userId : string) : any {
    this.socket.emit('chat-list' , { userId : userId });
    return this.getObservable('chat-list-response');
  }

  sendMessage(message : any) : void {
    this.socket.emit('add-message', message);
  }

  receiveMessages() : any {
    return this.getObservable('add-message-response');
  }

  logout(userId) : any {
    this.socket.emit('logout', userId);
    return this.getObservable('logout-response');
  }


  /// below are for video connection usage
  sendMessageForVideoConnection(data) {
    this.socket.emit('message', data);
  }

  connectToSocketId(sid) {
    console.log('trying to connect to socket id: ', sid);
    this.socket.emit('connect-socket-request', { toSocketId: sid });
    return this.getObservable('connect-socket-reply');
  }

  confirmConnectionToSocketId(tsid) {
    this.socket.emit('connect-socket-answer', {
      ready: 'Y',
      toSocketId: tsid
    });
  }

  onSocketConnectionRequest() {
    return this.getObservable('connect-socket-relay');
  }

  onMessage() {
    return this.getObservable('message');
  }

}
