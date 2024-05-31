import { NgFor } from '@angular/common';
import { UnitService } from './../../../@core/service/api/unit.service';
import { Component, OnInit } from '@angular/core';
import { Iunit } from '../../../@core/interfaces/unit.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-unit',
  standalone: true,
  imports: [NgFor , RouterLink],
  templateUrl: './unit.component.html',
  styleUrl: './unit.component.scss',
})
export class UnitComponent implements OnInit {
  // handle get data loading 
  // nguồn : https://dev.to/rensjaspers/angular-guide-for-beginners-fetching-data-from-an-api-with-loading-spinner-implementation-120l
  isLoading: boolean | undefined;
  ListData: Iunit[] = [];
  constructor(private Unit: UnitService) {}
  ngOnInit(): void {
    this.isLoading = true;
    this.getUnit();
  }
  getUnit(): void {
    this.Unit.getUnit().subscribe(
      (res: any) => {
        this.ListData = res.data;
        this.isLoading = false;
      },
      (err) => {
        this.isLoading = false;
        console.log('Error:', err);
      }
    );
  }
 
}
