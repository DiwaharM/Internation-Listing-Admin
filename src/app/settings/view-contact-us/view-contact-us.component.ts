import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material';

import { SettingsService } from '../settings.service';
import { ContactUs } from '../contact-us/contact-us.model';

@Component({
  selector: 'app-view-contact-us',
  templateUrl: './view-contact-us.component.html',
  styleUrls: ['./view-contact-us.component.css']
})
export class ViewContactUsComponent implements OnInit {
  contactModel;
  contactAddModel: ContactUs;
  contactEditForm: FormGroup;
  contactForm: FormGroup;
  message;
  action;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['firstName', 'lastName', 'mobileNumber', 'delete'];
  publicDetails: ContactUs[];
  contactData;

  constructor(private fb: FormBuilder, private router: Router, private settingService: SettingsService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getContactDetails();
  }
  getContactDetails() {
    this.settingService.getContactDetails().subscribe(data => {
      this.contactData = data;
    });
  }
  editAddress(data) {
    data.detailsUpdate = true;
  }
  cancelDetails(data) {
    data.detailsUpdate = false;
  }
  deleteContact(data) {
    this.settingService.deleteContact(data._id).subscribe(val => {
      this.contactAddModel = val;
      this.getContactDetails();
    }, err => {
      console.log(err);
    });
  }
  showOrderDetails(row) {
    this.router.navigate(['settings/contactus/',row._id]);
  }
}
