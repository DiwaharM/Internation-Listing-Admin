import { Component, OnInit } from '@angular/core';
import { PaymentPackage } from './payment-package.model';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { PaymentDetailsService } from '../payment-details.service';

@Component({
  selector: 'app-add-payment-package',
  templateUrl: './add-payment-package.component.html',
  styleUrls: ['./add-payment-package.component.css']
})
export class AddPaymentPackageComponent implements OnInit {
  PaymentForm: FormGroup;
  paymentModel: PaymentPackage;
  duration = [
    { month: '1 month', days: 30 },
    { month: '6 month', days: 180},
    { month: '1 year', days: 365}
  ];

  constructor(private paymentDetailsSerivce: PaymentDetailsService, private router: Router,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.PaymentForm = this.fb.group({
      duration: [''],
      amount: [''],
      grade: [''],
      description: ['']
    });
  }
  addPaymentPackage(PaymentForm: FormGroup) {
    this.paymentModel = new PaymentPackage();
    this.paymentModel.duration = PaymentForm.controls.duration.value.days;
    this.paymentModel.month = PaymentForm.controls.duration.value.month;
    this.paymentModel.amount = PaymentForm.controls.amount.value;
    this.paymentModel.grade = PaymentForm.controls.grade.value;
    this.paymentModel.description = PaymentForm.controls.description.value;
    this.paymentDetailsSerivce.createPaymentDetail(this.paymentModel).subscribe(data => {
      this.router.navigate(['payment/viewPaymentPackage']);
    }, error => {
      console.log(error);
    });
  }
  Cancel() {
    this.router.navigate(['payment/viewPaymentPackage']);
  }
}
