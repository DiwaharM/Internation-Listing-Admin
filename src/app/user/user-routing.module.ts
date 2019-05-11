import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicUserComponent  } from './public-user/public-user.component';
import { BusinessUserComponent } from './business-user/business-user.component';
import { ViewBusinessUserComponent } from './view-business-user/view-business-user.component';

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
    path: 'viewBusinessUser',
    component: ViewBusinessUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
