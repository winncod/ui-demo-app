import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  
  @Input() disabled:boolean = false;
  @Input() color: string = 'clear';
  
  constructor() { }

  ngOnInit(): void {
    if ( this.color !== 'primary' && this.color !== 'danger' && this.color !== 'clear' ) {
      throw new Error(`: color must be an string with values 'primary', 'danger' or 'clear'`);
    }
  }
}
