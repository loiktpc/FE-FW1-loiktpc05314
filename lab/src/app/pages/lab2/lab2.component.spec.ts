import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lab2Component } from './lab2.component';

describe('Lab2Component', () => {
  let component: Lab2Component;
  let fixture: ComponentFixture<Lab2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lab2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Lab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
