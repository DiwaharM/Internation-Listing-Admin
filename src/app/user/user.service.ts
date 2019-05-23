import { Injectable } from '@angular/core';
import { AppSetting } from '../config/appSetting';
import { HttpClient } from '@angular/common/http';
import { Observable, fromEventPattern } from 'rxjs';
import { PublicUser } from './public-user/public-user.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
serviceUrl: string = AppSetting.serviceUrl;
  constructor(private http: HttpClient) { }

  getPublicUser(): Observable<any> {
    const addUrl = 'getpulbeicuser';
    const url: string = this.serviceUrl + addUrl;
    return this.http.get<PublicUser>(url);
  }
}
