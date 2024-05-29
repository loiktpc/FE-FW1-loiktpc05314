import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productlab5Component } from './productlab5.component';

describe('Productlab5Component', () => {
  let component: Productlab5Component;
  let fixture: ComponentFixture<Productlab5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productlab5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Productlab5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
