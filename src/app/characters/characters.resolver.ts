import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CharactersService } from './characters.service';
import { SwapResponse } from './characters.types';

@Injectable({
  providedIn: 'root'
})
export class CharactersResolver implements Resolve<any> {

  constructor(private _charactersService: CharactersService)
  {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SwapResponse>
  {
      return this._charactersService.getCharacters(route.paramMap.get('id')??'');
  }
}
