import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material';
import { MatStepper } from '@angular/material';
import { Promotion } from './promotion.model';
import { BusinessUser } from '../../user/business-user/business-user.model';
/* import {Product} from '../../product/add-product/product.model';
import {priceValue} from '../../shared/validation/price-validation'; */

import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  promotionForm: FormGroup;
  promotionModel: Promotion;
  /*   productModel: Product; */
  selection = new SelectionModel<BusinessUser>(true, []);
  imageNameFilter;
  showImageNameError = false;
  message;
  action;
  /*   subProductModel: Product; */
  productNameFilter = new FormControl('');
  productSkuCodeFilter = new FormControl('');
  companyData;
  allProducts;
  clickedProducts;


  fileLength;
  fileToUpload;
  urls = new Array<string>();
  displayedColumns: string[] = ['select', 'listing', 'companyName', 'firstName'];
  constructor(private fb: FormBuilder, private router: Router, private settingService: SettingsService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.createForm();
    this.getAllCompany();
  }
  createForm() {
    this.promotionForm = this.fb.group({
      id: [''],
      promotionTitle: [''],
      position: [''],
      selectedProducts: ['']
    });
  }

  getAllCompany() {
    this.settingService.getBusinessUser().subscribe(data => {
      this.companyData = data;
      console.log(data);
      this.companyData = new MatTableDataSource<BusinessUser>(data);
      this.companyData.sort = this.sort;
      this.companyData.paginator = this.paginator;
      this.companyData.filterPredicate = this.createProductFilter();
    }, err => {
      console.log(err);
    });
  }

  masterToggle() {
    const page: { startIndex: number, endIndex: number } = this.findStartEndIndices();

    const sortedData = this.companyData._orderData(this.companyData.data);
    if (this.isAllSelected()) {
      sortedData.slice(page.startIndex, page.endIndex).forEach(row => {
        this.selection.deselect(row);
      });
      console.log(this.selection.selected);
    } else {
      sortedData.slice(page.startIndex, page.endIndex).forEach(row => {
        this.selection.select(row);
      });
    }
    this.newTest();
  }
  rowToggle(row) {
    this.selection.toggle(row);
    row.selected = !row.selected;
    this.newTest();
  }
  newTest() {
    this.allProducts = '';
    this.clickedProducts = this.selection.selected.map(x => x._id);
    this.promotionForm.controls.selectedProducts.setValue(this.clickedProducts);
  }
  createProductFilter(): (data: any, filter: string) => boolean {
    const filterFunction = function(data, filter): boolean {
      const searchTerms = JSON.parse(filter);
      return data.companyName.toLowerCase().indexOf(searchTerms.companyName) !== -1 &&
        data._id.toLowerCase().indexOf(searchTerms._id) !== -1;
    };
    return filterFunction;
  }
  private findStartEndIndices(): { startIndex: number, endIndex: number } {
    const pageIndex = this.companyData.paginator.pageIndex;
    const pageSize = this.companyData.paginator.pageSize;
    const total = this.companyData.paginator.length;
    const startIndex = pageIndex * pageSize;
    const endIndex = (startIndex + pageSize) > total ? total : startIndex + pageSize;
    return { startIndex: startIndex, endIndex: endIndex };
  }
  isAllSelected() {
    const page: { startIndex: number, endIndex: number }
      = this.findStartEndIndices();
    const sortedData = this.companyData._orderData(this.companyData.data);
    const numSelected = sortedData.slice(page.startIndex, page.endIndex)
      .filter(row => this.selection.isSelected(row)).length;

    return numSelected === (page.endIndex - page.startIndex);
  }
  isAtLeaseOneSelected() {
    if (this.companyData.length === 0) {
      console.log(this.companyData.length);
    } else {
      const page: { startIndex: number, endIndex: number } =
        this.findStartEndIndices();
      const sortedData = this.companyData._orderData(this.companyData.data);
      const numSelected = sortedData.slice(page.startIndex, page.endIndex)
        .filter(row => this.selection.isSelected(row)).length;
      return numSelected > 0;
    }
  }

  createPromotions() {
    this.message = 'Promotions Created';
    this.promotionModel = new Promotion();
    this.promotionModel.companyId = this.clickedProducts;
    this.promotionModel.promotionPosition = this.promotionForm.controls.position.value;
    this.promotionModel.promotionTitle = this.promotionForm.controls.promotionTitle.value;
    this.settingService.addPromotion(this.promotionModel).subscribe(data => {
      this.snackBar.open(this.message, this.action, {
        duration: 2000,
      });
      this.router.navigate(['settings/viewpromotions']);
    }, err => {
      console.log(err);
    });
  }
}
