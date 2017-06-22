import { Injectable, OnInit } from '@angular/core';
import { SocketService } from './socket.service';

@Injectable()
export class WebrtcService implements OnInit {

  isStarted = false;
  isChannelReady = false;
  isInitiator = false;

  localStream : any;
  remoteStream : any;

  localVideo : any;
  remotevideo : any; // Got

  fromSocketId = null;
  toSocketId = null; // Got

  pc; // self created data

  constructor(private _socketService : SocketService) {
    // console.log('webrtc service this: ', this);
  }

  ngOnInit() {

  }

  setToSocketId(tsid) {
    this.toSocketId = tsid;
  }

  setInitiator(isInitiator) {
    this.isInitiator = isInitiator;
  }

  setRemoteVideo(rv) {
    console.log('this remotevideo set to: ', rv);
    this.remotevideo = rv;
  }

  setLocalStream(ls) {
    this.localStream = ls;
  }

  setChannelReady(isReady) {
    this.isChannelReady = isReady;
  }

  createPeerConnection() {
    try {
      this.pc = new RTCPeerConnection(null);
      this.pc.onicecandidate = (event) => {
        // console.log('icecandidate event: ', event);
        if (event.candidate) {
          // console.log('this._socketService: ', this._socketService);
          this.sendMessage({
            toSocketId: this.toSocketId,
            msg: {
              type: 'candidate',
              label: event.candidate.sdpMLineIndex,
              id: event.candidate.sdpMid,
              candidate: event.candidate.candidate
            }
          });
        } else {
          console.log('End of candidates.');
        }
      }
      this.pc.onaddstream = (event) => {
        console.log('Remote stream added.');
        let remoteVideo = this.remotevideo.nativeElement;
        remoteVideo.src = window.URL.createObjectURL(event.stream);
        this.remoteStream = event.stream;
      }
      this.pc.onremovestream = (event) => {
        // console.log('Remote stream removed. Event: ', event);
      }

      // console.log('Created RTCPeerConnnection');
    } catch (e) {
      console.log('Failed to create PeerConnection, exception: ' + e.message);
      alert('Cannot create RTCPeerConnection object.');
      return;
    }
  }

  maybeStart() {
    console.log('maybeStart():', this.isStarted, this.localStream,
                                 this.isChannelReady);
    if (!this.isStarted && typeof this.localStream !== 'undefined' &&
        this.isChannelReady) {
      console.log('>>>>>> creating peer connection');
      this.createPeerConnection();
      this.pc.addStream(this.localStream);
      this.isStarted = true;
      console.log('isInitiator', this.isInitiator);
      if (this.isInitiator) {
        this.doCall();
      }
    }
  }

  doCall() {
    console.log('Sending offer to peer');
    this.pc.createOffer(
      (sessionDescription) => {
        this.pc.setLocalDescription(sessionDescription);
        // console.log('setLocalAndSendMessage sending message', sessionDescription);
        this.sendMessage({
          toSocketId: this.toSocketId,
          msg: sessionDescription
        });
    }, (event) => {
      console.log('createOffer() error: ', event);
    })
  }

  sendMessage(data) {
    this._socketService.sendMessageForVideoConnection(data);
  }

  onOffer(data) {
    if (!this.isInitiator && !this.isStarted) {
      this.maybeStart();
    }
    this.pc.setRemoteDescription(new RTCSessionDescription(data.msg));
    this.doAnswer();
  }

  onAnswer(data) {
    if(this.isStarted) {
      this.pc.setRemoteDescription(new RTCSessionDescription(data.msg));
    }
  }

  onCandidate(data) {
    if(this.isStarted) {
      var candidate = new RTCIceCandidate({
        sdpMLineIndex: data.msg.label,
        candidate: data.msg.candidate
      });
      this.pc.addIceCandidate(candidate);
    }
  }

  onRemoteHangup() {
    console.log('Session terminated.');
    this.stop();
    this.isInitiator = false;
  }

  stop() {
    this.isStarted = false;
    if(this.pc) {
      this.pc.close();
    }
    this.pc = null;
  }


  doAnswer() {
    console.log('Sending answer to peer.');
    this.pc.createAnswer().then((sessionDescription) => {
      this.pc.setLocalDescription(sessionDescription);
      // console.log('setLocalAndSendMessage sending message', sessionDescription);
      this.sendMessage({
        toSocketId: this.toSocketId,
        msg: sessionDescription
      });
    }, (error) => {
      console.log('Failed to create session description: ' + error.toString());
    })
  }

  onCreateSessionDescriptionError(error) {
    console.log('Failed to create session description: ' + error.toString());
  }


}
