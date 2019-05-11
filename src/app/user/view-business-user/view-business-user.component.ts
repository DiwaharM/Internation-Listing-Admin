import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material';

import { UserService } from '../user.service';

import { BusinessUser } from '../business-user/business-user.model';
import { BusinessImageData } from './businessImageData.model';

@Component({
  selector: 'app-view-business-user',
  templateUrl: './view-business-user.component.html',
  styleUrls: ['./view-business-user.component.css']
})
export class ViewBusinessUserComponent implements OnInit {
  businessUserModel = [{firstName: 'Sharwin' , lastName: 'Aadhithya', companyName: 'Google', country: 'India',
                        emailId: 'sharwin@gmail.com', mobileNumber: 4353434324, packageDetails: '6 Month', listingCompanyName: 'Goolge',
                        listingCountry: 'India', listingEmailId: 'sharwin@gmail.com', listingMobileNumber: '4545454545',
                        webLink: 'www.google.com', category: 'Listing'  }];
  /* footerAddModel: BusinessUser; */
  businessViewForm: FormGroup;
  /* footerForm: FormGroup; */
  message;
  action;

  fileLength: number;
  fileToUpload: any[];
  urls = new Array<string>();

  reader: FileReader = new FileReader();
  logoImageData: BusinessImageData = new BusinessImageData();
  constructor(private fb: FormBuilder, private router: Router, private userService: UserService,
              private snackBar: MatSnackBar) { }


  ngOnInit() {
    /* this.getFooterDetails(); */
    this.createForm();
  }
  createForm() {
    this.businessViewForm = this.fb.group({
      id: [''],
      firstName: [''],
      lastName: [''],
      companyName: [''],
      country: [''],
      emailId: [''],
      mobileName: [''],
      listingCompanyName: [''],
      listingCountry: [''],
      listingEmailId: [''],
      listingMobileNumber: [''],
      webLink: [''],
      category: [''],
      packageDetails: [''],
      logoImageName: [''],
      companyImageName: ['']
    });
  }
/* getFooterDetails () {
  this.settingService.getFooterDetails().subscribe(data => {
    this.footerModel = data;
    console.log(data);
  });
} */
editAddress(data) {
  data.detailsUpdate = true;
}
cancelDetails(data) {
  data.detailsUpdate = false;
}

/* updateDetails(id, address, contactNo, alternativeContactNo, mailId, map ) {
  this.message = 'Details updated';
  const str =  this.footerModel[0].logoImageName;
  const imageName = str.substring(str.lastIndexOf('/') + 1);
  this.footerAddModel = new Footer();
  this.footerAddModel.address = address;
  this.footerAddModel.instagramLink = this.footerModel[0].instagramLink;
  this.footerAddModel.facebookLink = this.footerModel[0].facebookLink;
  this.footerAddModel.pintrestLink = this.footerModel[0].pintrestLink;
  this.footerAddModel.googlePlusLink = this.footerModel[0].googlePlusLink;
  this.footerAddModel.twitterLink = this.footerModel[0].twitterLink;
  this.footerAddModel.mailId = mailId;
  this.footerAddModel.map = map;
  this.footerAddModel.contactNo = contactNo;
  this.footerAddModel.alternativeContactNo = alternativeContactNo;
  this.footerAddModel.logoImageName = imageName;
  this.settingService.updateFooterDetails(this.footerAddModel, id).subscribe(data => {
    this.snackBar.open(this.message, this.action, {
      duration: 2000,
    });
    this.footerModel = data;
  });
} */
editSocialMedia(data) {
  data.socialUpdate = true;
}
/* updateSocialDetails(id , instagramLink , facebookLink , pintrestLink, googlePlusLink,  twitterLink ) {
  this.message = 'Social Media Links updated';
  const str =  this.footerModel[0].logoImageName;
  const imageName = str.substring(str.lastIndexOf('/') + 1);
  this.footerAddModel = new Footer();
  this.footerAddModel.address = this.footerModel[0].address;
  this.footerAddModel.instagramLink = instagramLink;
  this.footerAddModel.facebookLink = facebookLink;
  this.footerAddModel.pintrestLink = pintrestLink;
  this.footerAddModel.googlePlusLink = googlePlusLink;
  this.footerAddModel.twitterLink = twitterLink;
  this.footerAddModel.mailId = this.footerModel[0].mailId;
  this.footerAddModel.map = this.footerModel[0].map;
  this.footerAddModel.contactNo = this.footerModel[0].contactNo;
  this.footerAddModel.alternativeContactNo = this.footerModel[0].alternativeContactNo;
  this.footerAddModel.logoImageName = imageName;
  this.settingService.updateFooterDetails(this.footerAddModel, id).subscribe(data => {
    this.snackBar.open(this.message, this.action, {
      duration: 2000,
    });
    this.footerModel = data;
  });
 } */
 cancelSocialDetails(data) {
  data.socialUpdate = false;
 }
 editLogo(data) {
   data.logoUpdate = true;
 }
 handleFileInput(images: any) {
  this.fileToUpload = images;
  this.logoImageData.logoImage = this.fileToUpload[0];
  this.urls = [];
  const files = images;
  if (files) {
    for (const file of files) {
      this.reader = new FileReader();
      this.reader.onload = (e: any) => {
        this.urls.push(e.target.result);
      };
      this.reader.readAsDataURL(file);
    }
  }
}
cancelLogo(data) {
  data.logoUpdate = false;
}
/* updateLogo(id) {
  this.message = 'Logo updated';
  const formData: any = new FormData();
  this.fileLength = this.fileToUpload.length;
  for (let i = 0; i <= this.fileLength; i++) {
    formData.append('uploads[]', this.fileToUpload[i]);
  }
  this.settingService.uploadLogo(formData, id).subscribe(data => {
    this.snackBar.open(this.message, this.action, {
      duration: 2000,
    });
  }, error => {
    console.log(error);
  });

} */

}
