import { Injectable } from '@angular/core';
import { AppSetting } from '../config/appSetting';
import { HttpClient } from '@angular/common/http';
import { Observable, fromEventPattern } from 'rxjs';
import { PublicUser } from './public-user/public-user.model';
import { BusinessUser } from './business-user/business-user.model';
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
  getBusinessUser(): Observable<any> {
    const addUrl = 'getbusniessuser';
    const url: string = this.serviceUrl + addUrl;
    return this.http.get<BusinessUser>(url);
  }
  getSelectedBusinessUser(id): Observable<any> {
    const addUrl = 'getselectedbusniessuser/';
    const url: string = this.serviceUrl + addUrl + id;
    return this.http.get<BusinessUser>(url);
  }
  uploadBusinessUserLogo(data, id): Observable<any> {
    const addUrl = 'updatebusinessuserlogo/';
    const url: string = this.serviceUrl + addUrl + id;
    return this.http.put<BusinessUser>(url, data);
  }
  getReview(): Observable<any> {
    const addUrl = 'getallreview';
    const url: string = this.serviceUrl + addUrl;
    return this.http.get<any>(url);
  }
  getCurrentVisitorCount(data, id): Observable<any> {
    const addUrl = 'getcurrentvisitorcount/';
    const url: string = this.serviceUrl + addUrl + id;
    return this.http.post<BusinessUser>(url, data);
  }
  getTotalVisitorCount(id): Observable<any> {
    const addUrl = 'gettotalvisitorcount/';
    const url: string = this.serviceUrl + addUrl + id;
    return this.http.get<BusinessUser>(url);
  }
  deleteSingleCompanyImage(data, id): Observable<any> {
    const addUrl = 'deletesinglecompnanyimage/';
    const url: string = this.serviceUrl + addUrl + id;
    return this.http.post<BusinessUser>(url, data);
  }
  getSelectedReport(id): Observable<any> {
    const sharedUrl = 'selectedreport/';
    const url: string = this.serviceUrl + sharedUrl + id;
    return this.http.get<any>(url);
  }
  getSubscriberSelectedReport(id): Observable<any> {
    const sharedUrl = 'subscriberselectedreport/';
    const url: string = this.serviceUrl + sharedUrl + id;
    return this.http.get<any>(url);
  }
}
