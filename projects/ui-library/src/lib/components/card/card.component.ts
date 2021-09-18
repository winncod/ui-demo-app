import { 
  Component, 
  OnInit,
  Directive, 
  Input,
  ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {'class': 'ui-card'}
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

@Directive({
  selector: 'ui-card-content',
  host: {'class': 'ui-card-content'}
})
export class CardContent {}

@Directive({
  selector: 'ui-card-header',
  host: {'class': 'ui-card-header'}
})
export class CardHeader {}


@Directive({
  selector: `ui-card-title`,
  host: {
    'class': 'ui-card-title'
  }
})
export class CardTitle {}

@Directive({
  selector: `ui-card-subtitle`,
  host: {
    'class': 'ui-card-subtitle'
  }
})
export class CardSubtitle {}

@Directive({
  selector: 'ui-card-actions',
  host: {
    'class': 'ui-card-actions',
    '[class.ui-card-actions-align-end]': 'align === "end"',
  }
})
export class CardActions {
  @Input() align: 'start' | 'end' = 'start';
}


@Directive({
  selector: 'ui-card-footer',
  host: {'class': 'ui-card-footer'}
})
export class CardFooter {}