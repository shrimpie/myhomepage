import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;

  constructor(private validateService : ValidateService,
              private flashMessage: FlashMessagesService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  myFlashMessage(msg:string, cls:string, timeout:number) {
    this.flashMessage.show(msg, {
      cssClass: cls,
      timeout: timeout
    });
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }
    // required fields
    if(!this.validateService.validateRegister(user)) {
      this.myFlashMessage('Please fill in all fields', 'alert-danger', 3000);
      return false;
    }
    // validate email
    if(!this.validateService.validateEmail(user.email)) {
      this.myFlashMessage('Please use a valid email', 'alert-danger', 3000);
      return false;
    }
    // register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success) {
        this.myFlashMessage('You are now registered and can log in',
                            'alert-success', 3000);
        this.router.navigate(['/login']);
      } else {
        this.myFlashMessage('Something went wrong', 'alert-danger', 3000);
        this.router.navigate(['/register']);
      }
    });
  }


}
