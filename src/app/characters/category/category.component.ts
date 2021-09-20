import { Component, OnInit, ViewChild, ViewEncapsulation,HostListener  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { CharactersService } from '../characters.service';
import {  SwapResponse } from '../characters.types';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs/operators';

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
    private observer: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.characters$ = this._charactersService.characters$;
  }

  ngAfterViewInit(){
    this._charactersService.page$.subscribe((page:number)=>{
      this.paginator.pageIndex = page;
    });

    this.observer
    .observe(['(max-width: 540px)'])
    .pipe(delay(1))
    .subscribe((res) => {
      if (res.matches) {
        this.cols = 1;
      } else {
        this.cols = 2;
      }
    });
  }

  goPage(page:number){
    return this._charactersService.getCharactersPage(page).toPromise();
  }

}
