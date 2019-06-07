import { Component, OnInit } from '@angular/core';
import { PaymentPackage } from '../add-payment-package/payment-package.model';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { PaymentDetailsService } from '../payment-details.service';


@Component({
  selector: 'app-view-payment-package',
  templateUrl: './view-payment-package.component.html',
  styleUrls: ['./view-payment-package.component.css']
})
export class ViewPaymentPackageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
