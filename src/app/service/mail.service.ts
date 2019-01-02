import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private _http: HttpClient) { }

  blnSuccesfulSub: boolean = false;

  sendToMailchimp(data){
    console.log("send data through post to server" + environment.connection_uri)
    return this._http.post(environment.connection_uri + "signup", data); //environment.connection_uri                 
  }

}
