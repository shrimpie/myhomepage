import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Blog } from "../models/blog";

@Injectable()
export class BlogService {

  private port = process.env.PORT || 8080;
  private baseUrl = 'http://localhost:' + this.port + '/';
  // private baseUrl = '';

  private _getUrl = this.baseUrl + "blogs";
  private _postUrl = this.baseUrl + "blog";
  private _putUrl = this.baseUrl + "blog/";
  private _deleteUrl = this.baseUrl + "blog/";

  constructor(private _http : Http) { }

  getBlogs(author : string) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('author', author);
    return this._http.get(this._getUrl, { search: params })
                     .map((res: Response) => res.json());
  }

  addBlog(blog : Blog) {
    let headers = new Headers({ 'Content-Type' : 'application/json'});
    let options = new RequestOptions({ headers : headers });
    return this._http.post(this._postUrl, JSON.stringify(blog), options)
                     .map((res : Response) => res.json());
  }

  updateBlog(blog : Blog){
    let headers = new Headers({ 'Content-Type' : 'application/json'});
    let options = new RequestOptions({ headers : headers });
    return this._http.put(this._putUrl + blog._id, JSON.stringify(blog),
                          options)
                     .map((res : Response) => res.json());
  }

  deleteBlog(blog : Blog) {
    return this._http.delete(this._deleteUrl + blog._id)
                     .map((res : Response) => res.json());
  }

}
