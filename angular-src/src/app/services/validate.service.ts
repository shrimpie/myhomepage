import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    return !(user.name == undefined || user.email == undefined ||
             user.username == undefined || user.password == undefined);
  }

  validateBlog(blog) {
    return !(blog.user == undefined || blog.title == undefined ||
             blog.content == undefined);
  }

  validateEmail(email) {
    let re = new RegExp([
      '^(([^<>()[\\]\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\.,;:\\s@\"]+)*)',
      '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
      '[0-9]{1,3}\])|(([a-zA-Z\\-0-9]+\\.)+',
      '[a-zA-Z]{2,}))$'].join(''));
    return re.test(email);
  }

}
