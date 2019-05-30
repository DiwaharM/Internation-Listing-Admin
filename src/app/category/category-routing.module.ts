import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperCategoryComponent } from './super-category/super-category.component';
import { MainCategoryComponent } from './main-category/main-category.component';
import { KeywordComponent } from './keyword/keyword.component';

const routes: Routes = [
  {
    path: 'supercategory',
    component: SuperCategoryComponent
  },
  {
    path: 'maincategory',
    component: MainCategoryComponent
  },
  {
    path: 'keyword',
    component: KeywordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
