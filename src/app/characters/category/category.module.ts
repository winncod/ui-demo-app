import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { UiLibraryModule } from 'projects/ui-library/src/public-api';
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatCardModule} from '@angular/material/card'; 

@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    UiLibraryModule,
    MatGridListModule,
    MatPaginatorModule,
    MatCardModule,
  ]
})
export class CategoryModule { }
