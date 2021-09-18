import { Component, OnInit, ViewChild, ViewEncapsulation,HostListener  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { CharactersService } from '../characters.service';
import {  SwapResponse } from '../characters.types';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryComponent implements OnInit {
  
  @ViewChild('paginator') paginator: MatPaginator;
  public characters$: Observable<SwapResponse|null> = new Observable<SwapResponse | null>();
  public cols: number = 2;

  constructor(
    private _charactersService: CharactersService,
  ) { }

  ngOnInit(): void {
    this.characters$ = this._charactersService.characters$;
    this.detectGridColumns();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.detectGridColumns();
  }

  detectGridColumns() {
    if(window.innerWidth < 540) {
      this.cols = 1;
    }else{
      this.cols = 2;
    }
  }

  ngAfterViewInit(){
    this._charactersService.page$.subscribe((page:number)=>{
      this.paginator.pageIndex = page;
    });
  }

  goPage(page:number){
    return this._charactersService.getCharactersPage(page).toPromise();
  }

}
