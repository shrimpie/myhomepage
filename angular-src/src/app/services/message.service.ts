import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { URLSearchParams } from '@angular/http';


@Injectable()
export class MessageService {

  private _getUrl = "http://localhost:3000/messages";

  constructor(private _http : Http) { }

  getMessages(condition : any) {
    // console.log('message.service.ts | getMessages | condition:', condition);
    let params: URLSearchParams = new URLSearchParams();
    params.set('authorId', condition.authorId);
    params.set('toAuthorId', condition.toAuthorId);
    // console.log('params: ', params);

    return this._http.get(this._getUrl, {
      search: params
    }).map((res: Response) => res.json());
  }

}
