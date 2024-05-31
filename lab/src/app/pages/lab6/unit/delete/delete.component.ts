import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { UnitService } from '../../../../@core/service/api/unit.service';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss',
})
export class DeleteComponent {
  constructor(
    private Unit: UnitService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  delete(): void {
    let id = this.route.snapshot.params['id'];
    this.Unit.deleteUnit(id).subscribe(
      (hero) => {
        if (hero) {
          alert('xóa thành công');
          this.router.navigate(['/lab6unit']);
        }
      },
      (err) => {
        console.log('Error:', err);
      }
    );
  }
}
