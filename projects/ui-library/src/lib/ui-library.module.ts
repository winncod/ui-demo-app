import { NgModule } from '@angular/core';
import { RippleModule } from './directives/ripple.module';
import { ButtonModule } from './components/button/button.module';
import { CardComponent } from './components/card/card.component';
import { CardModule } from './components/card/card.module';



@NgModule({
  declarations: [
  
  ],
  imports: [
    RippleModule,ButtonModule,CardModule
  ],
  exports: [
    RippleModule,ButtonModule,CardModule
  ]
})
export class UiLibraryModule { }
