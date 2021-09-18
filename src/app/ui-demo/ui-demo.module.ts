import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiDemoRoutingModule } from './ui-demo-routing.module';
import { UiDemoComponent } from './ui-demo.component';
import { UiLibraryModule } from 'projects/ui-library/src/public-api';


@NgModule({
  declarations: [
    UiDemoComponent
  ],
  imports: [
    CommonModule,
    UiDemoRoutingModule,
    UiLibraryModule,
  ]
})
export class UiDemoModule { }
