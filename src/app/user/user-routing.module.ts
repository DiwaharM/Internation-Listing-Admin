import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicUserComponent } from './public-user/public-user.component';
import { BusinessUserComponent } from './business-user/business-user.component';
import { ViewBusinessUserComponent } from './view-business-user/view-business-user.component';
import { ReviewComponent } from './review/review.component';
import { VisitorReportsComponent } from './visitor-reports/visitor-reports.component';

const routes: Routes = [
  {
    path: 'publicuser',
    component: PublicUserComponent
  },
  {
    path: 'businessuser',
    component: BusinessUserComponent
  },
  {
    path: 'viewBusinessUser/:id',
    component: ViewBusinessUserComponent
  },
  {
    path: 'review',
    component: ReviewComponent
  },
  {
    path: 'visiterReport',
    component: VisitorReportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
