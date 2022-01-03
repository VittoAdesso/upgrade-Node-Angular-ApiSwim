import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class LibreServicesService {

  private baseUrl: string = "http://localhost:5000/libre";  

  constructor(private http: HttpClient) { }

public getEstilosLibre(){

  return this.http.get(this.baseUrl); 
}

}

/* 
export class LibreServicesService {
  endpoint: string = 'http://localhost:5000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, public router: Router) { }

  getLibre(): Observable<any> {
    let api = `${this.endpoint}/libre`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }
    // Error 
   handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
 */