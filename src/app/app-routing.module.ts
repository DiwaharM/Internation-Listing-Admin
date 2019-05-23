import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavSidebarComponent } from './shared/nav-sidebar/nav-sidebar.component';
const routes: Routes = [
  {
    path: '',
    component: NavSidebarComponent,
    children: [{
      path: 'settings',
      loadChildren: './settings/settings.module#SettingsModule'
    },
    {
      path: 'user',
      loadChildren: './user/user.module#UserModule'
    },
    {
      path: 'category',
      loadChildren: './category/category.module#CategoryModule'
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
