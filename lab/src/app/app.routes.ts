import { Routes, RouterModule, CanActivate } from '@angular/router';

import { ProductComponent } from './pages/lab3/product/product.component';
import { StarComponent } from './pages/lab3/star/star.component';
import { ProductComponentLab4 } from './pages/lab4/product/product.component';
import { ProductdetailComponent } from './pages/lab4/product/productdetail/productdetail.component';
import { HomeComponent } from './pages/lab4/home/home.component';
import { PageNotFoundComponentComponent } from './pages/page-not-found-component/page-not-found-component.component';
import { LoginComponent } from './pages/lab5/auth/login/login.component';
import { Productlab5Component } from './pages/lab5/productlab5/productlab5.component';
import { UnitComponent } from './pages/lab6/unit/unit.component';
import { CreateComponent } from './pages/lab6/unit/create/create.component';
import { DeleteComponent } from './pages/lab6/unit/delete/delete.component';
import { EditComponent } from './pages/lab6/unit/edit/edit.component';
import { AuthGuard } from './@core/guards/auth.guards';

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
  // lab5 dùng chung lab 7 
  { path: '', redirectTo: '/loginlab5', pathMatch: 'full' },
  { path: 'loginlab5', component: LoginComponent ,},
  { path: 'productlab5' ,canActivate: [AuthGuard],component: Productlab5Component  },
  // lab 6
  // { path: '', redirectTo: '/lab6unit', pathMatch: 'full' },
  { path: 'lab6unit',canActivate: [AuthGuard] ,component: UnitComponent },
  { path: 'lab6addunit', component: CreateComponent },
  { path: 'lab6deleteunit/:id', component: DeleteComponent },
  { path: 'lab6editunit/:id', component: EditComponent },
  { path: '**', component: PageNotFoundComponentComponent },
];

export class AppRoutingModule {}
