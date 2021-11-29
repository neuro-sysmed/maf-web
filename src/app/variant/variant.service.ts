import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Variant } from './variant.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class VariantService {


  //private cloudUrl  = 'clouds/';  // URL to web api
  private variantUrl  = 'http://localhost:8008/variant'

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  };

  
  /** GET variant by id. Will 404 if id not found */
  getVariantById(id:string): Observable<Variant> {
    const url = `${this.variantUrl}/${id}`;
    return this.http.get<Variant>(url).pipe(
      tap(_ => this.log(`fetched variant id=${id}`)),
      catchError(this.handleError<Variant>(`getVariant id=${id}`))
    );
  }  

  /** GET variant by id. Will 404 if id not found */
  getVariant(chrom:string, pos:number, ref:string, alt:string): Observable<Variant> {
    const url = `${this.variantUrl}/${chrom}/${pos}/${ref}/${alt}/`;
    return this.http.get<Variant>(url).pipe(
      tap(_ => this.log(`fetched variant id=${chrom}-${pos}-${ref}-${alt}`)),
      catchError(this.handleError<Variant>(`getVariant id=${chrom}-${pos}-${ref}-${alt}`))
    );
  }  
  

  constructor(private http: HttpClient, ) { }
  
  private log(message: string) {
    console.log(`CloudsService: ${message}`);
  }
  
}
