import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';

/**
 * A child component of memeber-list component. 
 */
@Component({
  selector: 'app-memeber-card',
  templateUrl: './memeber-card.component.html',
  styleUrls: ['./memeber-card.component.scss']
})
export class MemeberCardComponent implements OnInit {

  @Input() user: User;
  
  constructor() { }

  ngOnInit() {
  }

}
