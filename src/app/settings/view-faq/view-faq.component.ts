import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import {FAQ} from '../faq/faq.model';
import { MatSnackBar } from '@angular/material';

import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-view-faq',
  templateUrl: './view-faq.component.html',
  styleUrls: ['./view-faq.component.css']
})
export class ViewFaqComponent implements OnInit {
  faqModel;
  privacyFAQForm: FormGroup;
  message;
  action;
  edit: boolean;
  constructor(private fb: FormBuilder, private router: Router, private settingService: SettingsService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getFAQ();
  }
  getFAQ() {
    this.settingService.getFaqDetails().subscribe(data => {
      this.faqModel = data;
    });
  }
  editFAQ(data) {
    this.router.navigate(['settings/editfaq', data._id]);
  }
  deleteFAQ(data) {
    this.message = 'Details deleted Successfully';
    this.settingService.deleteFaq(data).subscribe(val => {
      this.faqModel = val;
      this.snackBar.open(this.message, this.action, {
        duration: 2000
      });
 }, err => {
   console.log(err);
 });
  }
}
