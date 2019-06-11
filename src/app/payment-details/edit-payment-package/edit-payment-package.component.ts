import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { PaymentDetailsService } from '../payment-details.service';
import { PaymentPackage } from '../add-payment-package/payment-package.model';

@Component({
  selector: 'app-edit-payment-package',
  templateUrl: './edit-payment-package.component.html',
  styleUrls: ['./edit-payment-package.component.css']
})
export class EditPaymentPackageComponent implements OnInit {
  id: any;
  EditPaymentForm: FormGroup;
  paymentModel: any;
  temp: PaymentPackage;
  duration = [
    { month: '1 month', days: 30 },
    { month: '6 month', days: 180},
    { month: '1 year', days: 365}
  ];

  constructor(private paymentDetailsService: PaymentDetailsService, private router: Router,
              private route: ActivatedRoute, private fb: FormBuilder) {
                this.route.paramMap.subscribe((params: ParamMap) => {
                  this.id = params.get('id');
                });
              }

  ngOnInit() {
    this.createForm();
    this.getPaymentDetails();
  }

  createForm() {
    this.EditPaymentForm = this.fb.group({
      duration: [''],
      amount: [''],
      grade: [''],
      description: ['']
    });
  }
  getPaymentDetails() {
    this.paymentDetailsService.getSinglePaymentPackage(this.id).subscribe(data => {
      this.paymentModel = data;
    }, error => {
      console.log(error);
    });
  }
  Cancel() {
    this.router.navigate(['payment/viewPaymentPackage']);
  }
  editPaymentPackage(duration, amount, grade, description) {
    this.temp = new PaymentPackage();
    this.temp.duration = duration;
    this.temp.amount = amount;
    this.temp.grade = grade;
    this.temp.description = description;
    this.paymentDetailsService.updatePaymentPackage(this.temp, this.id).subscribe(data => {
      this.router.navigate(['payment/viewPaymentPackage']);
    }, error => {
      console.log(error);
    });
  }
}
