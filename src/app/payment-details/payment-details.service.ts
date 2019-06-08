import { Injectable } from '@angular/core';
import { AppSetting } from '../config/appSetting';
import { HttpClient } from '@angular/common/http';
import { Observable, fromEventPattern } from 'rxjs';
import { PaymentPackage } from './add-payment-package/payment-package.model';


@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {
  serviceUrl: string = AppSetting.serviceUrl;
  constructor(private http: HttpClient) { }

  createPaymentDetail(data): Observable<any> {
    const addUrl = 'createPayment';
    const url: string = this.serviceUrl + addUrl;
    return this.http.post<PaymentPackage>(url, data);
  }
  getAllPaymentPackage(): Observable<any> {
    const addUrl = 'getallpayment';
    const url: string = this.serviceUrl + addUrl;
    return this.http.get<PaymentPackage>(url);
  }
  getSinglePaymentPackage(id): Observable<any> {
    const addUrl = 'singlepayment/';
    const url: string = this.serviceUrl + addUrl + id;
    return this.http.get<PaymentPackage>(url);
  }
  updatePaymentPackage(data ,id): Observable<any> {
    const addUrl = 'updatepayment/';
    const url: string = this.serviceUrl + addUrl + id;
    return this.http.put<PaymentPackage>(url, data);
  }
  deletePaymentPackage(id): Observable<any> {
    const addUrl = 'deletepayment/';
    const url: string = this.serviceUrl + addUrl + id;
    return this.http.delete<PaymentPackage>(url);
  }
}
