import { Component } from '@angular/core';
import { IProduct } from '../entities/product';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  filteredLocationList: IProduct[] = [];
  
}
