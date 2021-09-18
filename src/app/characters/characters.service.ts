import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SwapResponse } from './characters.types';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

   // Private
   private _characters:  BehaviorSubject<SwapResponse | null> = new BehaviorSubject<SwapResponse | null>( null);
   private _category:  string = '';
   private _page:  BehaviorSubject<number> = new BehaviorSubject<number>(1);

   constructor(private _httpClient: HttpClient) { }

  /**
     * Getter for characters
  */
   get characters$(): Observable<SwapResponse | null>
   {
       return this._characters.asObservable();
   }

   get page$(): Observable<number>
   {
       return this._page.asObservable();
   }

   /**
     * Getter for category
  */
    get category(): string
    {
        return this._category;
    }

    /**
     * Get Characters
     */
    getCharacters(category:string): Observable<SwapResponse>
    {
        this._category = category;
        return this._httpClient.get<SwapResponse>(`https://swapi.dev/api/${category}`).pipe(
            tap((response) => {
                this._characters.next(response);
                this._page.next(0);
            })
        );
    }

    /**
     * Paginate Characters
     */
     getCharactersPage(page:number): Observable<SwapResponse>
     {
         return this._httpClient.get<SwapResponse>(`https://swapi.dev/api/${this._category}?page=${page}`).pipe(
             tap((response) => {
                 this._characters.next(response);
             })
         );
     }

    

}
