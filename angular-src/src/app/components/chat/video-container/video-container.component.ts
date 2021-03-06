import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SocketService } from '../../../services/socket.service';

@Component({
  selector: 'app-video-container',
  templateUrl: './video-container.component.html',
  styleUrls: ['./video-container.component.css']
})
export class VideoContainerComponent implements OnInit {

  connectStatus = 'not connected';
  confirmStatus = "Confirm connection";

  gotAConnectionRequest = false;

  fromSocketId = null;
  toSocketId = null;

  requestGot : any;
  replyGot : any;
  msg : any;

  audioStatus = 'Turn on Audio';

  @Input() selectedUser: string;
  @Input() selectedSocketId: string;

  @ViewChild('localVideo') myvideo : any;
  @ViewChild('remoteVideo') remotevideo : any;

  pc : any;
  localStream : any;
  gotLocalStream = false;

  remoteStream: any;
  isInitiator = false;
  isChannelReady = false;
  isStarted = false;

  selfVideoConstraints = {
    video:
      { width: { exact: 640 },
        height: { exact: 480 }
      },
    audio: true
  };

  remoteVideoConstraints = {
    audio: true,
    video: true
  }

  constructor(private _socketService : SocketService) { }

  ngOnInit() {
    this._socketService.onSocketConnectionRequest().subscribe(req => {
      this.gotAConnectionRequest = true;
      this.requestGot = req;
      this.fromSocketId = this.requestGot.fromSocketId;
      this.toSocketId = this.requestGot.fromSocketId;
    });

    this._socketService.onMessage().subscribe(data => {
      this.msg = data;
      if (this.msg.msg === 'got user media') {
        this.maybeStart();
      } else if (this.msg.msg.type === 'offer') {
        if (!this.isInitiator && !this.isStarted) {
          this.maybeStart();
        }
        this.pc.setRemoteDescription(new RTCSessionDescription(this.msg.msg));
        this.doAnswer();
      } else if (this.msg.msg.type === 'answer' && this.isStarted) {
        this.pc.setRemoteDescription(new RTCSessionDescription(this.msg.msg));
      } else if (this.msg.msg.type === 'candidate' && this.isStarted) {
        var candidate = new RTCIceCandidate({
          sdpMLineIndex: this.msg.msg.label,
          candidate: this.msg.msg.candidate
        });
        this.pc.addIceCandidate(candidate);
      } else if (this.msg.msg === 'bye') {
        this.stop();
      }
    });
  }

  sendMessage(data) {
    this._socketService.sendMessageForVideoConnection(data);
  }

  stop() {
    this.isStarted = false;
    this.isInitiator = false;
    if(this.pc) {
      this.pc.close();
      this.pc = null;
    }
  }

  onHandleAudio() {
    if(this.audioStatus === 'Turn on Audio') {
      this.localStream.getAudioTracks()[0].enabled = true;
      this.audioStatus = 'Turn off Audio';
    } else {
      this.localStream.getAudioTracks()[0].enabled = false;
      this.audioStatus = 'Turn on Audio';
    }
  }

  maybeStart() {
    if (!this.isStarted && typeof this.localStream !== 'undefined' &&
        this.isChannelReady) {
      if(!this.pc) {
        this.createPeerConnection();
      }
      this.pc.addStream(this.localStream);
      this.isStarted = true;
      if (this.isInitiator) {
        this.doCall();
      }
    }
  }

  createPeerConnection() {
    try {
      this.pc = new RTCPeerConnection(null);
      this.pc.onicecandidate = (event) => {
        if (event.candidate) {
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
        let remoteVideo = this.remotevideo.nativeElement;
        remoteVideo.src = window.URL.createObjectURL(event.stream);
        remoteVideo.play();
        this.remoteStream = event.stream;
      };
      this.pc.onremovestream = (event) => {
        console.log('Remote stream removed. Event: ', event);
      }
    } catch (e) {
      console.log('Failed to create PeerConnection, exception: ' + e.message);
      return;
    }
  }

  doCall() {
    this.pc.createOffer().then((sessionDescription) => {
      this.pc.setLocalDescription(sessionDescription);
      this.sendMessage({
        toSocketId: this.toSocketId,
        msg: sessionDescription
      });
    }, (event) => {
      console.log('createOffer() error: ', event);
    })
  }

  doAnswer() {
    this.pc.createAnswer().then((sessionDescription) => {
      this.pc.setLocalDescription(sessionDescription);
      this.sendMessage({
        toSocketId: this.toSocketId,
        msg: sessionDescription
      });
    }, (error) => {
      console.log('create session description error: ' + error.toString());
    })
  }

  controlConnect() {
    if(!this.selectedSocketId) { // select a target
      alert('select a user first');
    } else if(this.connectStatus === 'not connected'){ // try to connect
      // If you try to connect to others, open your own video first.
      this.openVideo(() => {
        this.connectStatus = 'connecting';
        // prepare the connect information
        this.toSocketId = this.selectedSocketId;
        this.isInitiator = true;
        this._socketService.connectToSocketId(this.selectedSocketId).subscribe(
          reply => {
            // console.log('connect socket reply:', reply);
            this.replyGot = reply;
            if(this.replyGot.ready === 'Y') {
              // console.log('She said ready');
              this.connectStatus = 'connected';
              this.isChannelReady = true;
              this.maybeStart();
            }
          }
        )
      });
    } else if(this.connectStatus === 'connecting') { // cancel
      this.connectStatus = 'not connected';
      this.closeStream();
    }
  }

  confirmConnection() {
    this.openVideo(() => {
      this._socketService.confirmConnectionToSocketId(this.fromSocketId);
      this.isChannelReady = true;
      if(!this.pc) {
        this.createPeerConnection();
      }
      this.connectStatus = 'connected';
      this.gotAConnectionRequest = false;
    });
  }

  getConnectBtnText() {
    if(this.connectStatus === 'connected') {
      return 'Connected!';
    } else if(this.connectStatus === 'connecting') {
      return 'connecting... cancel?';
    } else if(this.connectStatus === 'not connected') {
      return 'connect';
    }
  }

  openVideo(onLocalMediaReady) {
    if(!this.localStream) {
      navigator.mediaDevices.getUserMedia(this.selfVideoConstraints).then((
        stream) => {
          stream.getAudioTracks()[0].enabled = false;
          let video = this.myvideo.nativeElement;
          video.src = window.URL.createObjectURL(stream);
          this.localStream = stream;
          this.gotLocalStream = true;
          onLocalMediaReady();
        });
    } else {
      onLocalMediaReady();
      console.log('Got this.localStream already');
    }
  }

  closeStream() {
    if(this.localStream) {
      this.localStream.getTracks().forEach(track => track.stop());
      this.localStream = null;
      this.gotLocalStream = false;
    }
    if(this.remoteStream) {
      this.remoteStream.getTracks().forEach(track => track.stop());
      this.remoteStream = null;
    }
    this.toSocketId = '';
    this.fromSocketId = '';
    this.connectStatus = 'not connected';
    this.confirmStatus = 'Confirm connection';
    this.isChannelReady = false;
    this.isStarted = false;
  }

  onHangup() {
    this.closeVideo();
  }

  closeVideo() {
    if(this.connectStatus === 'connected') {
      if (confirm("Are you sure to hang up?") == true) {
        this.closeStream();
      } else {
        console.log('You cancelled, stay connected');
      }
    } else {
      this.closeStream();
    }
  }

}
