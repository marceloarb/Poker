import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  postUser(data){
    return this._http.post('users',data);
  }
  session(data){
    return this._http.post('user',data);
  }
}
