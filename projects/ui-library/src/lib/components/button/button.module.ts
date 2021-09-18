import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from '../../directives/ripple.module';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule,RippleModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
