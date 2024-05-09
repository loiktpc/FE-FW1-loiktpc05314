import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from '../interface/IProduct';

@Component({
  selector: 'listproduct',
  standalone: true,
  imports: [CommonModule],
  template: `
  <tr > 
      <td><img width="80" src="{{ ItemProduct.imageUrl }}" alt="" /></td>
      <td>{{ ItemProduct.productName }}</td>
      <td>{{ ItemProduct.productCode }}</td>
      <td>{{ ItemProduct.releaseDate }}</td>
      <td>{{ ItemProduct.price }}</td>
      <td>{{ ItemProduct.starRating }}</td>
   </tr>
  `,
})
export class ItemProductComponent {
  @Input() ItemProduct!: IProduct;
}
