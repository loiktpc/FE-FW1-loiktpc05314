import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductdetailComponent } from './product/productdetail/productdetail.component';
import { ProductComponentLab4 } from './product/product.component';
import { HeaderComponent } from '../lab2/header/header.component';

const lab4Routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'productlab4',
        component: ProductComponentLab4,
        children: [{ path: ':id', component: ProductdetailComponent }],
      },
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(lab4Routes)],
  exports: [RouterModule],
})
export class lab4RoutingModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
