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
}
