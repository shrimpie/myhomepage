import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  private authToken: any;
  private user: any;

  private port = process.env.PORT || 8080;
  private BASE_URL = 'http://localhost:' + this.port + '/';
  // when deploying to heroku, use below
  // private BASE_URL = '';

  constructor(private http: Http) { }

  getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  registerUser(user) {
    let headers = this.getHeaders();
    return this.http.post(this.BASE_URL + 'users/register', user, {
      headers: headers
    }).map(res => res.json());
  }

  authenticateUser(user) {
    let headers = this.getHeaders();
    return this.http.post(this.BASE_URL + 'users/authenticate', user, {
      headers: headers
    }).map(res => res.json());
  }

  getProfile() {
    let headers = this.getHeaders();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.get(this.BASE_URL + 'users/profile', {
      headers: headers
    }).map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
