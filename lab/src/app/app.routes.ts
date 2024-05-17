import { Routes , RouterModule} from '@angular/router';
import { ProductComponent } from './pages/lab3/product/product.component';
import { StarComponent } from './pages/lab3/star/star.component';


export const routes: Routes = [
  // lab 3 
  { path: 'product', component: ProductComponent  ,  pathMatch: 'full'},
  { path: 'star', component: StarComponent  ,  pathMatch: 'full'},
];

  export class AppRoutingModule { }