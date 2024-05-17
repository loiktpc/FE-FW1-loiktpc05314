import { Component , Input  } from '@angular/core';
@Component({
    selector: 'dialog',
    standalone: true,
    imports: [],
    template: `
      <h1>{{dialogname}}!</h1>
    `
  })
  export class DialogComponent {
    @Input() dialogname: string = 'kim';
  
  }