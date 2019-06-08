import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPaymentPackageComponent } from './add-payment-package/add-payment-package.component';
import { ViewPaymentPackageComponent } from './view-payment-package/view-payment-package.component';
import { EditPaymentPackageComponent } from './edit-payment-package/edit-payment-package.component';

const routes: Routes = [
  {
    path: 'addPaymentPackage',
    component: AddPaymentPackageComponent
  },
  {
    path: 'viewPaymentPackage',
    component: ViewPaymentPackageComponent
  },
  {
    path: 'editPaymentPackage/:id',
    component: EditPaymentPackageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentDetailsRoutingModule { }
