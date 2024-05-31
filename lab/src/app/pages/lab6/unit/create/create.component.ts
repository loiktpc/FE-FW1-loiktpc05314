import { Component, OnInit } from '@angular/core';
import { UnitService } from '../../../../@core/service/api/unit.service';
import { NgIf } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent implements OnInit {
  loginFrom!: FormGroup;
  disabled = true;
  constructor(private Unit: UnitService) {}
  ngOnInit(): void {
    this.loginFrom = new FormGroup({
      name: new FormControl('', [Validators.minLength(3)]),
      address: new FormControl('', [Validators.required]),
    });
  }
  add(name: string, address: string, note: string): void {
    name = name.trim();
    address = address.trim();
    note = note.trim();
    if (!name || !address) {
      this.disabled = false;
      return;
    }
    const data: any = {
      name: name,
      address: address,
      description: note,
    };
    console.log(data);

    this.Unit.addUnit(data).subscribe(
      (hero) => {
        if (hero) {
          alert('thêm thành công');
        }
      },
      (err) => {
        console.log('Error:', err);
      }
    );
  }
}
