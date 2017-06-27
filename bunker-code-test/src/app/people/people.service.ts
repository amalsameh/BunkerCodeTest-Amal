/**
 * Created by amal- on 6/26/2017.
 */
import { Injectable, EventEmitter } from '@angular/core';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch'

@Injectable()
export class PeopleService {
  private url = 'https://bunkerdev.azure-api.net/codetest/api/people/ad';

  constructor(public _http: Http) {
  }

  submitPeople(obj): Observable <Response> {
    const header = new Headers({'Content-Type' : 'application/json'});
    header.append('authorization', 'Punker');
    const options = new RequestOptions({headers: header});
    return this._http.post(this.url, obj).catch(this.handleError);
  }

  private  handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server Error')
  }
}

