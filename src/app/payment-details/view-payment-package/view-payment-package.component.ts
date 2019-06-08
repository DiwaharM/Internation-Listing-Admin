import { Component, OnInit, ViewChild } from '@angular/core';
import { PaymentPackage } from '../add-payment-package/payment-package.model';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { PaymentDetailsService } from '../payment-details.service';


@Component({
  selector: 'app-view-payment-package',
  templateUrl: './view-payment-package.component.html',
  styleUrls: ['./view-payment-package.component.css']
})
export class ViewPaymentPackageComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['duration', 'amount', 'grade', 'description', 'edit', 'delete'];
  paymentData: any;
  packageCount: any;
  hideOption = true;

  constructor(private paymentDetailService: PaymentDetailsService, private router: Router) { }

  ngOnInit() {
    this.getAllPaymentPackage();
  }
  getAllPaymentPackage() {
    this.paymentDetailService.getAllPaymentPackage().subscribe(data => {
      this.paymentData = data;
      this.packageCount = data.length;
      this.getCounting();
    }, error => {
      console.log(error);
    });
  }

  getCounting() {
    if (this.packageCount < 3) {
      this.hideOption = true;
    } else {
      this.hideOption = false;
    }
  }
  goToAddPayment() {
    this.router.navigate(['payment/addPaymentPackage']);
  }
  editPayment(row) {
    this.router.navigate(['payment/editPaymentPackage/', row._id]);
  }
  deletePayment(row) {
    this.paymentDetailService.deletePaymentPackage(row._id).subscribe(data => {
      this.paymentData = data;
      this.packageCount = data.length;
      this.getCounting();
    }, error => {
      console.log(error);
    });
  }
}
