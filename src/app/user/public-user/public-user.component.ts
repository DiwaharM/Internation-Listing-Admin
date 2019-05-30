import { Component, OnInit, ViewChild } from '@angular/core';
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
  displayedColumns: string[] = ['firstName', 'mobileNumber', 'emailId'];
  publicDetails: PublicUser[];
  publicData;

  constructor(private router: Router, private userservice: UserService) { }

  ngOnInit() {
    this.viewCustomers();
  }
  viewCustomers() {
    this.userservice.getPublicUser().subscribe(data => {
      /*    console.log(data); */
      this.publicData = data;
    }, err => {
      console.log(err);
    });
  }
  applyFilter(e) {

  }
}
