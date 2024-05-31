import { Component } from '@angular/core';
import { UnitService } from '../../../../@core/service/api/unit.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Iunit } from '../../../../@core/interfaces/unit.interface';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, NgIf, RouterLink, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  loginFrom!: FormGroup;
  hero: any;
  constructor(
    private Unit: UnitService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getUnit();
    this.loginFrom = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      address: new FormControl('', [Validators.required]),
    });
  }
  getUnit(): void {
    let id = this.route.snapshot.params['id'];
    console.log('check id ', id);
    this.Unit.getUnitDetail(id).subscribe((res: any) => (this.hero = res.data));
  }
  edit() {
    let id = this.route.snapshot.params['id'];
    if (this.hero) {
      this.Unit.updateUnit(this.hero, id).subscribe(
        (res) => {
          if (res) {
            alert('cập nhật thành công');
          }
        },
        (err) => {
          console.log('Error:', err);
        }
      );
    }
  }
}
