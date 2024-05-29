import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headerlab5Component } from './headerlab5.component';

describe('Headerlab5Component', () => {
  let component: Headerlab5Component;
  let fixture: ComponentFixture<Headerlab5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Headerlab5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Headerlab5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
