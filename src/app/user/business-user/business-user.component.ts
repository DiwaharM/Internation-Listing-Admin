import { Component, OnInit , ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { BusinessUser } from './business-user.model';
import { UserService } from '../user.service';

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
  businessData = [{firstName: 'Sharwin' , lastName: 'Aadhithya', companyName: 'Google', country: 'India',
  emailId: 'sharwin@gmail.com', mobileNumber: 9876548383}];

  constructor(private router: Router, private userservice: UserService) { }

  ngOnInit() {
    /* this.viewCustomers(); */
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
    this.router.navigate(['user/viewBusinessUser']);
  }
}

