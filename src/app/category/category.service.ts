import { Injectable } from '@angular/core';
import { AppSetting } from '../config/appSetting';
import { HttpClient } from '@angular/common/http';
import { Observable, fromEventPattern } from 'rxjs';
import { MainCategory } from './main-category/main-category.model';
import { SuperCategory } from './super-category/super-category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  serviceUrl: string = AppSetting.serviceUrl;
  constructor(private httpClient: HttpClient) { }
  getSuperCategory(): Observable<any> {
    const categoryUrl = 'categoryDetails';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.get<SuperCategory>(url);
  }

  addSuperCategory(data: SuperCategory): Observable<any> {
    const categoryUrl = 'addCategory';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.post<SuperCategory>(url, data);
  }
  uploadMainCategoryImages(data, supID,   mainID, mainname): Observable<any> {
    const addUrl = 'supercategory/';
    const addUrl1 = '/maincategoryname/';
    const addUrl2 = '/maincategoryid/';
    const url: string = this.serviceUrl + addUrl + supID + addUrl1 + mainname + addUrl2 + mainID ;
    return this.httpClient.put<boolean>(url, data);
  }
  uploadImages(data, categoryName): Observable<any> {
    const addUrl = 'supercategoryimage/';
    const url: string = this.serviceUrl + addUrl + categoryName ;
    return this.httpClient.put<SuperCategory>(url, data);
  }
  deleteSuperCategory(data): Observable<any> {
    const deleteUrl = 'categoryDelete/';
    const deleteUrl1 = '/name/';
    const url: string = this.serviceUrl + deleteUrl + data._id + deleteUrl1 + data.categoryName;
    return this.httpClient.delete<SuperCategory>(url);
  }
  addMainCategory(data: MainCategory): Observable<any> {
    const categoryUrl = 'mainCategory';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.post<MainCategory>(url, data);
  }
  getMainCategory(id): Observable<any> {
    const categoryUrl = 'superCategorydetail/';
    const url: string = this.serviceUrl + categoryUrl + id;
    return this.httpClient.get<MainCategory>(url);
  }
  deleteMainCategory(id, mainid, name): Observable<any> {
    const deleteUrl = 'category/';
    const deleteUrl1 = '/mainCategory/';
    const deleteUrl2 = '/name/';
    const url: string = this.serviceUrl + deleteUrl + id + deleteUrl1 + mainid + deleteUrl2 + name;
    return this.httpClient.delete<MainCategory>(url);
  }
}
