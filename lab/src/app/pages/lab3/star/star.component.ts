import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@Component({
  selector: 'app-star',
  standalone: true,
  imports: [TooltipModule],
  templateUrl: './star.component.html',
  styleUrl: './star.component.scss',
})
export class StarComponent implements OnInit {
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
