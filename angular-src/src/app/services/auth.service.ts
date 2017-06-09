import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  private authToken: any;
  private user: any;
  private baseUrl = 'http://localhost:3000/';
  // use the constructor to inject the dependency
  // (Another way to do it would be to use the @Inject annotation on each
  // injected constructor parameter, but this one is cleaner.)
  constructor(private http: Http) {
  }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // http.post is a shortcut method to perform POST request.
    // It returns a future object (HttpPromise).
    return this.http.post(this.baseUrl + 'users/register', user, {
      headers: headers
    }).map(res => res.json());
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.baseUrl + 'users/authenticate', user, {
      headers: headers
    }).map(res => res.json());
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    // The get method of http (from the angular/http/Http class) creates an
    // Observable object.
    return this.http.get(this.baseUrl + 'users/profile', {
      headers: headers
    }).map(res => res.json());
    // 1. The map function processes a result from the observable (in our case,
    // the fetched payload of an http.get call), using an ES6 arrow function.
    // 2. The arrow function's parameter res is actually a ResponseData object,
    // and can be parsed as binary (blob()), string (text()) or, in our case,
    // JavaScript via JSON (json()) content via its helper methods.
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
