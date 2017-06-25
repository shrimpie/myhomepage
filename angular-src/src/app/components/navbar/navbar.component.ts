import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Broadcaster } from '../../services/broadcast.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router,
              private flashMessage: FlashMessagesService,
              private _broadcaster : Broadcaster) {
  }

  ngOnInit() { }

  onLogoutClick() {
    this._broadcaster.broadcast('logout-from-navbar', 'Logging out!');
    this.authService.logout();
    this.flashMessage.show('You are now logged out', {
      cssClass: 'alert-success',
      timeout: 2000
    });
    this.router.navigate(['/']);
  }

}
