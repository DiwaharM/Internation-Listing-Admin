import { Injectable } from '@angular/core';
import { AppSetting } from '../config/appSetting';
import { HttpClient } from '@angular/common/http';
import { Observable, fromEventPattern } from 'rxjs';
import { Ads } from '../settings/ads/ads.model';
import { Banner } from '../settings/banners/banner.model';
import { Header } from '../settings/header/header.model';
import { TermsUse } from '../settings/terms-and-use/termsuse.model';
import { Support } from '../settings/support/support.model';
import { PrivacyPolicy } from '../settings/privacy-policy/privacy-policy.model';
import { ContactUs } from '../settings/contact-us/contact-us.model';
import { FAQ } from '../settings/faq/faq.model';
import { Footer } from '../settings/footer/footer.model';
@Injectable({
  providedIn: 'root'
})
export class SettingsService {
serviceUrl: string = AppSetting.serviceUrl;
  constructor(private http: HttpClient) { }

  uploadads(data , position): Observable<any> {
    const addUrl = 'adsforupload/';
    const url: string = this.serviceUrl + addUrl + position ;
    return this.http.put<boolean>(url, data);
  }
  getAds(): Observable<any> {
    const addUrl = 'getimageforads';
    const url: string = this.serviceUrl + addUrl;
    return this.http.get<Ads>(url);
  }
  deleteAds(data): Observable<any> {
    const addUrl = 'deleteads/';
    const url: string = this.serviceUrl + addUrl + data._id;
    return this.http.delete<Ads>(url);
  }
  uploadBanners(data , position): Observable<any> {
    const addUrl = 'bannerforupload/';
    const url: string = this.serviceUrl + addUrl + position ;
    return this.http.put<boolean>(url, data);
  }
  getBanners(): Observable<any> {
    const addUrl = 'getimageforbanner';
    const url: string = this.serviceUrl + addUrl;
    return this.http.get<Banner>(url);
  }
  deleteBanner(data): Observable<any> {
    const addUrl = 'deletebanner/';
    const url: string = this.serviceUrl + addUrl + data._id;
    return this.http.delete<Banner>(url);
  }
  addLogo(data): Observable<any> {
    const addUrl = 'headerforupload';
    const url: string = this.serviceUrl + addUrl ;
    return this.http.post<boolean>(url, data);
  }
  getHeaderDetails(): Observable<any> {
    const addUrl = 'getimageforheader';
    const url: string = this.serviceUrl + addUrl;
    return this.http.get<Header>(url);
  }
 
  addTerms(data): Observable<any> {
    const addUrl = 'termforupload';
    const url: string = this.serviceUrl + addUrl ;
    return this.http.post<boolean>(url, data);
  }
  getTerms(): Observable<any> {
    const addUrl = 'getallterm';
    const url: string = this.serviceUrl + addUrl;
    return this.http.get<TermsUse>(url);
  }
  updateTerm(data, id): Observable<any> {
    const addUrl = 'updateterms/';
    const url: string = this.serviceUrl + addUrl + id;
    return this.http.put<boolean>(url, data);
  }
  deleteSingleTerm(id): Observable<any> {
    const addUrl = 'deleteterms/';
    const url: string = this.serviceUrl + addUrl + id;
    return this.http.delete<boolean>(url);
  }
  addSupport(data): Observable<any> {
    const addUrl = 'createsupport';
    const url: string = this.serviceUrl + addUrl ;
    return this.http.post<boolean>(url, data);
  }
  getSupportDetails(): Observable<any> {
    const addUrl = 'getallsupport';
    const url: string = this.serviceUrl + addUrl;
    return this.http.get<Support>(url);
  }
  updateSupportDetails(data, id): Observable<any> {
    const addUrl = 'updatesupport/';
    const url: string = this.serviceUrl + addUrl + id;
    return this.http.put<Support>(url, data);
  }
  deleteSupport(id): Observable<any> {
    const addUrl = 'deletesupport/';
    const url: string = this.serviceUrl + addUrl + id;
    return this.http.delete<Support>(url);
  }
  addPrivacyPolicy(data): Observable<any> {
    const addUrl = 'createpolicy';
    const url: string = this.serviceUrl + addUrl ;
    return this.http.post<boolean>(url, data);
  }
  getPolicyDetails(): Observable<any> {
    const addUrl = 'getallpolicy';
    const url: string = this.serviceUrl + addUrl;
    return this.http.get<PrivacyPolicy>(url);
  }
  updatePolicyDetails(data, id): Observable<any> {
    const addUrl = 'updatepolicy/';
    const url: string = this.serviceUrl + addUrl + id;
    return this.http.put<PrivacyPolicy>(url, data);
  }
  deletePolicy(id): Observable<any> {
    const addUrl = 'deletepolicy/';
    const url: string = this.serviceUrl + addUrl + id;
    return this.http.delete<PrivacyPolicy>(url);
  }
  addContact(data): Observable<any> {
    const addUrl = 'createcontact';
    const url: string = this.serviceUrl + addUrl ;
    return this.http.post<boolean>(url, data);
  }
  getContactDetails(): Observable<any> {
    const addUrl = 'getallcontact';
    const url: string = this.serviceUrl + addUrl;
    return this.http.get<ContactUs>(url);
  }
  updateContactDetails(data, id): Observable<any> {
    const addUrl = 'updatecontact/';
    const url: string = this.serviceUrl + addUrl + id;
    return this.http.put<ContactUs>(url, data);
  }
  deleteContact(id): Observable<any> {
    const addUrl = 'deletecontact/';
    const url: string = this.serviceUrl + addUrl + id;
    return this.http.delete<ContactUs>(url);
  }
  addFaq(data): Observable<any> {
    const addUrl = 'createfaq';
    const url: string = this.serviceUrl + addUrl ;
    return this.http.post<boolean>(url, data);
  }
  getFaqDetails(): Observable<any> {
    const addUrl = 'getallfaq';
    const url: string = this.serviceUrl + addUrl;
    return this.http.get<FAQ>(url);
  }
  getSingleFaq(id): Observable<any> {
    const addUrl = 'getsinglefaq/';
    const url: string = this.serviceUrl + addUrl + id;
    return this.http.get<FAQ>(url);
  }
  updateFaqDetails(data, id): Observable<any> {
    const addUrl = 'updatefaq/';
    const url: string = this.serviceUrl + addUrl + id;
    return this.http.put<FAQ>(url, data);
  }
  deleteFaq(data): Observable<any> {
    const addUrl = 'deletefaq/';
    const url: string = this.serviceUrl + addUrl + data._id;
    return this.http.delete<FAQ>(url);
  }
  addFooterdetails(data): Observable<any> {
    const addUrl = 'footer';
    const url: string = this.serviceUrl + addUrl ;
    return this.http.post<boolean>(url, data);
  }
  uploadFooterLogo(data, id): Observable<any> {
    const addUrl = 'createLogoImage/';
    const url: string = this.serviceUrl + addUrl + id ;
    return this.http.put<Footer>(url, data);
  }
  getFooterDetails(): Observable<any> {
    const categoryUrl = 'footerDetails';
    const url: string = this.serviceUrl + categoryUrl;
    return this.http.get<Footer>(url);
  }
  updateFooterDetails(data , id): Observable<any> {
    const addUrl = 'updatefotterdetails/';
    const url: string = this.serviceUrl + addUrl + id ;
    return this.http.put<Footer>(url, data);
  }
}
