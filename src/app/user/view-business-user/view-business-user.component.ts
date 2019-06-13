import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material';
import { CustomerLog } from '../business-user/customerLog.model';
import { UserService } from '../user.service';

import { BusinessUser } from '../business-user/business-user.model';
import { BusinessImageData } from './businessImageData.model';

@Component({
  selector: 'app-view-business-user',
  templateUrl: './view-business-user.component.html',
  styleUrls: ['./view-business-user.component.css']
})
export class ViewBusinessUserComponent implements OnInit {
  businessUserModel;
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
  id: string;
  packageValue: any;
  currentCount: any;
  temp1: any;
  totalCount: any;
  reportModel: any;
  packageHistory: any;
  constructor(private fb: FormBuilder, private router: Router, private userService: UserService,
              private snackBar: MatSnackBar, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
  }


  ngOnInit() {
    /* this.getFooterDetails(); */
    this.createForm();
    this.getSelectedBusinessUser();
    this.getCurrentVisitorCount();
    this.getTotalVisitorCount();
    this.getSelectedReport();
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
  updateLogo(id) {
    this.message = 'Logo updated';
    const formData: any = new FormData();
    this.fileLength = this.fileToUpload.length;
    for (let i = 0; i <= this.fileLength; i++) {
      formData.append('uploads[]', this.fileToUpload[i]);
    }
    this.userService.uploadBusinessUserLogo(formData, id).subscribe(data => {
      this.snackBar.open(this.message, this.action, {
        duration: 2000,
      });
    }, error => {
      console.log(error);
    });

  }
  getSelectedBusinessUser() {
    this.userService.getSelectedBusinessUser(this.id).subscribe(data => {
      this.businessUserModel = data;
      this.packageValue = data[0].packageDetails;
      const v = data[0].packageDetails.length - 1;
      this.packageValue = data[0].packageDetails[v];
      this.packageHistory = data[0].packageDetails;
      /* console.log(this.packageHistory); */
    }, error => {
      console.log(error);
    });
  }
  getCurrentVisitorCount() {
    this.temp1 = new CustomerLog();
    this.temp1.date = new Date().toISOString().slice(0, 10);
    this.userService.getCurrentVisitorCount(this.temp1, this.id).subscribe(data => {
      this.currentCount = data;
    }, error => {
      console.log(error);
    });
  }
  getTotalVisitorCount() {
    this.userService.getTotalVisitorCount(this.id).subscribe(data => {
      this.totalCount = data;
    }, error => {
      console.log(error);
    });
  }
  getSelectedReport() {
    this.userService.getSelectedReport(this.id).subscribe(data => {
      this.reportModel = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
  geSubscriberSelectedReport() {
    this.userService.getSubscriberSelectedReport(this.id).subscribe(data => {
      this.reportModel = data;
      /*   console.log(data); */
    }, error => {
      console.log(error);
    });
  }
  deleteCompanyImage(data, id) {
    const temp = data.split('/');
    const first = new BusinessUser();
    first.companyImageName = temp[7];
    this.userService.deleteSingleCompanyImage(first, id).subscribe(value => {
      this.reportModel = value;
      this.getSelectedBusinessUser();
    }, error => {
      console.log(error);
    });

  }
}
