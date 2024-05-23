import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponentLab4 } from './product.component';

describe('ProductComponentLab4', () => {
  let component: ProductComponentLab4;
  let fixture: ComponentFixture<ProductComponentLab4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductComponentLab4]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductComponentLab4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
