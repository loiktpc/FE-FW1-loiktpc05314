import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-starlab4',
  standalone: true,
  imports: [],
  templateUrl: './starlab4.component.html',
  styleUrl: './starlab4.component.scss'
})
export class Starlab4Component {
  @Input() rating: number = 0;
  starWidth: number = 0;
 
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
  ngOnInit(): void {
    this.starWidth = (this.rating * 90) / 5;
  }
  onClick(): void {
    this.ratingClicked.emit(`${this.rating} was clicked!`);
  }
}
