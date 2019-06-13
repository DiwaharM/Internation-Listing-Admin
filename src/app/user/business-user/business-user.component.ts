import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { BusinessUser } from './business-user.model';
import { UserService } from '../user.service';
import { concat } from 'rxjs';

@Component({
  selector: 'app-business-user',
  templateUrl: './business-user.component.html',
  styleUrls: ['./business-user.component.css']
})
export class BusinessUserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['firstName', 'companyName', 'emailId', 'mobileNumber'];
  businessDetails: BusinessUser[];
  businessData;

  constructor(private router: Router, private userservice: UserService) { }

  ngOnInit() {
    /* this.viewCustomers(); */
    this.getBusinessUser();
  }
  /* viewCustomers() {
    this.customerService.getAllCustomers().subscribe(data => {
      this.customerDetails = data;
      this.customerData = data;
      this.customerData = new MatTableDataSource<RegModel>(data);
      this.customerData.sort = this.sort;
      this.customerData.paginator = this.paginator;
    }, err => {
      console.log(err);
    });
  } */
  showOrderDetails(e) {
    /*  console.log(e); */
    this.router.navigate(['user/viewBusinessUser/', e._id]);
  }
  applyFilter(filterValue: string) {
    this.businessData.filter = filterValue.trim().toLowerCase();
  }
  getBusinessUser() {
    this.userservice.getBusinessUser().subscribe(data => {
      /*   console.log(data); */
      this.businessData = data;
      this.businessData = new MatTableDataSource<BusinessUser>(data);
      this.businessData.sort = this.sort;
      this.businessData.paginator = this.paginator;
    }, error => {
      console.log(error);
    });
  }
}

