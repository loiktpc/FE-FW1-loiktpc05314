import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './page-not-found-component.component.html',
  styleUrl: './page-not-found-component.component.scss'
})
export class PageNotFoundComponentComponent {
  constructor(private router: Router, private route: ActivatedRoute) { }
  onBack(){
    this.router.navigate(['/homelab4']);
  }
}
