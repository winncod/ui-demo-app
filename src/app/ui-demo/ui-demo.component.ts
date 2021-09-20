import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ui-demo',
  templateUrl: './ui-demo.component.html',
  styleUrls: ['./ui-demo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UiDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
