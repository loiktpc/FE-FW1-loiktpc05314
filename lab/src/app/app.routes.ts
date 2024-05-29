import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './pages/lab3/product/product.component';
import { StarComponent } from './pages/lab3/star/star.component';
import { ProductComponentLab4 } from './pages/lab4/product/product.component';
import { ProductdetailComponent } from './pages/lab4/product/productdetail/productdetail.component';
import { HomeComponent } from './pages/lab4/home/home.component';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component';
import { LoginComponent } from './pages/lab5/auth/login/login.component';
import { Productlab5Component } from './pages/lab5/productlab5/productlab5.component';

export const routes: Routes = [
  // lab 3
  { path: 'product', component: ProductComponent, pathMatch: 'full' },
  { path: 'star', component: StarComponent, pathMatch: 'full' },
  // lab 4
  // { path: '', redirectTo: '/homelab4', pathMatch: 'full' },
  // { path: 'homelab4', component: HomeComponent },
  // { path: 'productlab4', component: ProductComponentLab4  },
  // { path: 'productdetail/:id', component: ProductdetailComponent  },
  {
    path: 'homelab4',
    loadChildren: () => import('./pages/lab4/lab4.module').then(m => m.lab4Module),
  },
  // lab5 
  { path: '', redirectTo: '/loginlab5', pathMatch: 'full' },
  { path: 'loginlab5', component: LoginComponent },
  { path: 'productlab5', component: Productlab5Component },
  { path: '**', component: PageNotFoundComponentComponent },
];

export class AppRoutingModule {}
