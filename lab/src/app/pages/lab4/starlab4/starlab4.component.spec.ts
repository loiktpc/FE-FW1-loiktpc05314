import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Starlab4Component } from './starlab4.component';

describe('Starlab4Component', () => {
  let component: Starlab4Component;
  let fixture: ComponentFixture<Starlab4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Starlab4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Starlab4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
