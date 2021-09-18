import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  { 
    path: '', component: LayoutComponent ,
    children: [
      { path: 'characters', loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule) },  
    ]
  },
  { path: 'ui-demo', loadChildren: () => import('./ui-demo/ui-demo.module').then(m => m.UiDemoModule) }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
