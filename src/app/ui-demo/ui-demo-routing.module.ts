import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiDemoComponent } from './ui-demo.component';

const routes: Routes = [{ path: '', component: UiDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiDemoRoutingModule { }
