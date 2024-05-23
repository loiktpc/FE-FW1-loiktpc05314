import { Component , DoCheck } from '@angular/core';
import { HeaderComponent } from '../../lab2/header/header.component';
import { IProduct } from '../../../interface/IProduct';
import { NgForOf, NgIf } from '@angular/common';
import {  RouterLink } from '@angular/router';
import { Starlab4Component } from '../starlab4/starlab4.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HeaderComponent , NgForOf , NgIf , RouterLink , Starlab4Component , CommonModule ,RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponentLab4 implements DoCheck  {
 
  currentUrl: string | undefined;
  isProductLab4: boolean = false;

  constructor(private router: Router) { }
  listProduct: IProduct[] = [
    {
      productId: 1,
      code:'123123',
      productName: 'Smartphone',
      productCode: 'SMRT1',
      releaseDate: '2023-01-01',
      price: 499.99,
      description: 'A powerful smartphone with advanced features.',
      starRating: 3,
      imageUrl:
        'https://images2.thanhnien.vn/528068263637045248/2023/11/27/galaxy-17011270877801619441200.jpg',
    },
    {
      productId: 2,
      code:'ng-3213',
      productName: 'Laptop',
      productCode: 'LPTP1',
      releaseDate: '2023-02-15',
      price: 999.99,
      description: 'High-performance laptop for all your computing needs.',
      starRating: 4,
      imageUrl:
        'https://hanoicomputercdn.com/media/product/74467_laptop_lenovo_ideapad_slim_5_14ilr8__82xd002vvn___1_.jpg',
    },
    {
      productId: 3,
      code:'ng-asd',
      productName: 'Headphones',
      productCode: 'HDNS1',
      releaseDate: '2023-03-10',
      price: 149.99,
      description: 'Premium headphones for an immersive audio experience.',
      starRating: 5,
      imageUrl:
        'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671363',
    },
    {
      productId: 4,
      code:'ng-123123',
      productName: 'Smartwatch',
      productCode: 'SWCH1',
      releaseDate: '2023-04-20',
      price: 199.99,
      description:
        'Stay connected with this stylish and feature-rich smartwatch.',
      starRating: 3,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK6aKlvirL71LgfX_bxARCv6MuF23ahNcu_9I3mi0fzQ&s',
    },
    {
      productId: 5,
      code:'ng-798',
      productName: 'Tablet',
      productCode: 'TBLT1',
      releaseDate: '2023-05-05',
      price: 349.99,
      description: 'Portable tablet for work and entertainment on the go.',
      starRating: 5,
      imageUrl:
        'https://images-cdn.ubuy.co.in/633b51122af1ce605a57ae50-10-1.jpg',
    },
  ];
  clickMeStar(value: string) {
    alert(`số sao ${value}`)
  }
  ngDoCheck(): void {
    if(this.router.url === '/homelab4/productlab4'){
      this.isProductLab4 = true;
    }else{
      this.isProductLab4 = false;
    }
    
  }

 
}
