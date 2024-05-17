import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Inventor } from './interface/Inventor';
import { NgFor } from '@angular/common';
import { IProduct } from './interface/IProduct';
import { ItemProductComponent } from './item-product/item-product.component';
import { ProductlistComponent } from './pages/lab2/productlist/productlist.component';
import { HeaderComponent } from './pages/lab2/header/header.component';
import { ProductComponent } from './pages/lab3/product/product.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor,
    ItemProductComponent,
    RouterLinkActive,
    RouterLink,
    ProductlistComponent,
    HeaderComponent,
    ProductComponent,
    TooltipModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'FPT POLYTECHNIC';
  student = {
    username: 'Kim Thanh Loi',
    gender: 'Nam',
    date: '24/12/2003',
    img: 'https://caodang.fpt.edu.vn/wp-content/uploads/photo.jpg',
    course: 8.9,
  };
  Inventors: Inventor[] = [
    { id: 1, first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 },
    { id: 2, first: 'Nikola', last: 'Tesla', year: 1856, passed: 1943 },
    { id: 3, first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { id: 4, first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { id: 5, first: 'Leonardo', last: 'da Vinci', year: 1452, passed: 1519 },
    { id: 6, first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { id: 7, first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    {
      id: 8,
      first: 'Alexander',
      last: 'Graham Bell',
      year: 1847,
      passed: 1922,
    },
    { id: 9, first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { id: 10, first: 'Stephen', last: 'Hawking', year: 1942, passed: 2018 },
  ];
  Products: IProduct[] = [
    {
      productId: 1,
      productName: 'Smartphone',
      productCode: 'SMRT1',
      releaseDate: '2023-01-01',
      price: 499.99,
      description: 'A powerful smartphone with advanced features.',
      starRating: 4.5,
      imageUrl:
        'https://images2.thanhnien.vn/528068263637045248/2023/11/27/galaxy-17011270877801619441200.jpg',
    },
    {
      productId: 2,
      productName: 'Laptop',
      productCode: 'LPTP1',
      releaseDate: '2023-02-15',
      price: 999.99,
      description: 'High-performance laptop for all your computing needs.',
      starRating: 4.8,
      imageUrl:
        'https://hanoicomputercdn.com/media/product/74467_laptop_lenovo_ideapad_slim_5_14ilr8__82xd002vvn___1_.jpg',
    },
    {
      productId: 3,
      productName: 'Headphones',
      productCode: 'HDNS1',
      releaseDate: '2023-03-10',
      price: 149.99,
      description: 'Premium headphones for an immersive audio experience.',
      starRating: 4.3,
      imageUrl:
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671363',
    },
    {
      productId: 4,
      productName: 'Smartwatch',
      productCode: 'SWCH1',
      releaseDate: '2023-04-20',
      price: 199.99,
      description:
        'Stay connected with this stylish and feature-rich smartwatch.',
      starRating: 4.6,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK6aKlvirL71LgfX_bxARCv6MuF23ahNcu_9I3mi0fzQ&s',
    },
    {
      productId: 5,
      productName: 'Tablet',
      productCode: 'TBLT1',
      releaseDate: '2023-05-05',
      price: 349.99,
      description: 'Portable tablet for work and entertainment on the go.',
      starRating: 4.4,
      imageUrl:
        'https://images-cdn.ubuy.co.in/633b51122af1ce605a57ae50-10-1.jpg',
    },
  ];
}
