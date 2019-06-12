import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Route, ParamMap, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material';

import { SettingsService } from '../settings.service';
import { ContactUs } from './contact-us.model';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  contactModel: ContactUs;
  id: any;
  holder: any;
  constructor(private fb: FormBuilder, private router: Router, private settingService: SettingsService,
              private snackBar: MatSnackBar, private route: ActivatedRoute) {
                this.route.paramMap.subscribe((params: ParamMap) => {
                  this.id = params.get('id');
                });
              }

  ngOnInit() {
    this.getSelectedContactUs();
  }
  getSelectedContactUs() {
    this.settingService.getSingleContactDetails(this.id).subscribe(data => {
      this.holder = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
}
