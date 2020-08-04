import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { myApp } from '../exports';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  public sendMail(form): Observable<any> {
    return this.httpClient.post(myApp.url + '/send-email', form);
  }
}


