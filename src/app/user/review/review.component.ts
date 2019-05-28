import { Component, OnInit , ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { UserService } from '../user.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['userName', 'reviewTitle', 'reviewDescription', 'date', 'listingName'];
  reviewData;
  constructor(private router: Router, private userservice: UserService) { }

  ngOnInit() {
    this.getAllReview();
  }

  getAllReview() {
    this.userservice.getReview().subscribe(data => {
      this.reviewData = data;
    }, error => {
      console.log(error);
    });
  }
}
