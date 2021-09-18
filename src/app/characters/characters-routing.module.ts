import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { CharactersComponent } from './characters.component';
import { CharactersResolver } from './characters.resolver';

const routes: Routes = [
  { 
    path: ':id', 
    loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) ,
    resolve  : {
      data    : CharactersResolver
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
