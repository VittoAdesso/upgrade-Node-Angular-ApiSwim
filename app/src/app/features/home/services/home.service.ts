import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseUrl: string = "http://localhost:5000/....";  

  constructor(private http: HttpClient) { }

public getEstilosLibre(){

  return this.http.get(this.baseUrl); 
}

}
