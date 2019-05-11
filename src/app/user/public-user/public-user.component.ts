import { Component, OnInit , ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { PublicUser } from './public-user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-public-user',
  templateUrl: './public-user.component.html',
  styleUrls: ['./public-user.component.css']
})
export class PublicUserComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['customerName', 'mobileNumber', 'emailId'];
  publicDetails: PublicUser[];
  publicData = [{customerName: 'Kumaran', mobileNumber: '9868798798', emailId: 'kumar@gmail.com'},
  {customerName: 'Mani', mobileNumber: '8797664567', emailId: 'mani@gmail.com'},
  {customerName: 'Rahul', mobileNumber: '9845332266', emailId: 'rahul@gmail.com'},
  {customerName: 'Babu', mobileNumber: '9532576233', emailId: 'babu@gmail.com'},
  {customerName: 'Anand', mobileNumber: '8156748532', emailId: 'anand@gmail.com'}  ];

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
}
