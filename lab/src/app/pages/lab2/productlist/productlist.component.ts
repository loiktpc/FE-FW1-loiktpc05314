import { NgFor, NgIf } from '@angular/common';
import { IProduct } from '../entities/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.scss',
})
export class ProductlistComponent {
  notice : string = 'không có sản phẩm tồn tại'
  isCheckProduct : boolean = false;
  ShowImgaeProduct: boolean = false;
  getRange(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }
  Products: IProduct[] = [
    {
      productId: 1,
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
  listProduct: IProduct[] = [];
  constructor() {}
  ngOnInit(): void {
    this.listProduct = this.Products;
  }
  filterResults(text: string) {
    if (!text) {
      this.isCheckProduct = false;
      this.listProduct = this.Products;
      return;
    }

    this.listProduct = this.Products.filter((itemProduct) =>
      itemProduct?.productName.toLowerCase().includes(text.toLowerCase())
    );
    if(this.listProduct.length === 0) {

      this.isCheckProduct = true;
    }else{
      this.isCheckProduct = false;
    }
    
    
  }
  // bài 5
  private _text: string = '';
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    this._text = value;
    this.filterResults(this._text);
  }
}
