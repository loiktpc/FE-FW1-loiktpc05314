import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Headerlab5Component } from "./headerlab5/headerlab5.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet , Headerlab5Component],
    template:  `<app-headerlab5> </app-headerlab5> <router-outlet> </router-outlet>`,
    styleUrl: './headerlab5.component.scss'
  })
  export class Pagelab5Component {
  
  }