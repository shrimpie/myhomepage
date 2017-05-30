import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Blog } from "../models/blog";

@Injectable()
export class BlogService {

  private _getUrl = "http://localhost:3000/blogapi/blogs";
  private _postUrl = "http://localhost:3000/blogapi/blog";
  private _putUrl = "http://localhost:3000/blogapi/blog/";
  private _deleteUrl = "http://localhost:3000/blogapi/blog/";


  constructor(private _http : Http) { }

  getBlogs() {
    return this._http.get(this._getUrl)
                     .map((res: Response) => res.json());
  }

  addBlog(blog : Blog) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers : headers });
    return this._http.post(this._postUrl, JSON.stringify(blog), options)
                     .map((res : Response) => res.json());
  }

  updateBlog(blog : Blog){
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers : headers });
    return this._http.put(this._putUrl + blog._id, JSON.stringify(blog), options)
                     .map((res : Response) => res.json());
  }

  deleteBlog(blog : Blog) {
    return this._http.delete(this._deleteUrl + blog._id)
                     .map((res : Response) => res.json());
  }

}
