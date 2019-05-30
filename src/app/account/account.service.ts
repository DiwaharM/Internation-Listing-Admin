import { Injectable } from '@angular/core';
import { AppSetting } from '../config/appSetting';
import { HttpClient } from '@angular/common/http';
import { Observable, fromEventPattern } from 'rxjs';
import { LogIn } from './login/login.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  serviceUrl: string = AppSetting.serviceUrl;
  constructor(private http: HttpClient) { }

  Login(data): Observable<any> {
    const accountUrl = 'login';
    const url: string = this.serviceUrl + accountUrl;
    return this.http.post<LogIn>(url, data);
  }
}
