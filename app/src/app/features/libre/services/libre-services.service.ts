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
