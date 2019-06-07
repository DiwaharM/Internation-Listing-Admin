import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPaymentPackageComponent } from './add-payment-package/add-payment-package.component';
import { ViewPaymentPackageComponent } from './view-payment-package/view-payment-package.component';

const routes: Routes = [
  {
    path: 'addPaymentPackage',
    component: AddPaymentPackageComponent
  },
  {
    path: 'viewPaymentPackage',
    component: ViewPaymentPackageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentDetailsRoutingModule { }
