import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { URLSearchParams } from '@angular/http';


@Injectable()
export class MessageService {

  private baseUrl = "http://localhost:" + (process.env.PORT || 8080);

  private _getUrl = this.baseUrl + "/messages";

  constructor(private _http : Http) { }

  getMessages(condition : any) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('authorId', condition.authorId);
    params.set('toAuthorId', condition.toAuthorId);

    return this._http.get(this._getUrl, {
      search: params
    }).map((res: Response) => res.json());
  }

}
