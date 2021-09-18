import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from '../../directives/ripple.module';
import { CardActions, CardComponent, CardContent, CardFooter, CardHeader, CardSubtitle, CardTitle } from './card.component';


@NgModule({
  declarations: [
    CardComponent,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardContent,
    CardFooter,
    CardActions,
    CardFooter
  ],
  imports: [CommonModule,RippleModule],
  exports: [
    CardComponent,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardContent,
    CardFooter,
    CardActions,
    CardFooter
  ],
})
export class CardModule {}
