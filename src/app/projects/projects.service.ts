import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Project } from './projects.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  //private cloudUrl  = 'clouds/';  // URL to web api
  private projectUrl  = 'http://localhost:8008/projects/'

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


  getProjects(): Observable<Project[]> {

    return this.http.get<Project[]>(this.projectUrl)
       .pipe(
          tap(_ => this.log('fetched clouds')),
          catchError(this.handleError<Project[]>('getProjects', [])));
  }
  
  /** GET project by id. Will 404 if id not found */
  getCloud(id:string): Observable<Project> {
    const url = `${this.projectUrl}/${id}`;
    return this.http.get<Project>(url).pipe(
      tap(_ => this.log(`fetched project id=${id}`)),
      catchError(this.handleError<Project>(`getCloud id=${id}`))
    );
  }  
  
  constructor(private http: HttpClient, ) { }
  
  private log(message: string) {
    console.log(`CloudsService: ${message}`);
  }
  
}
