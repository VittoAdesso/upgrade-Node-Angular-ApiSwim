import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MariposaService {
  recoverListMariposa() {
    throw new Error('Method not implemented.');
  }

  private baseUrl: string = "http://localhost:5000/mariposa";  

  constructor(private http: HttpClient) { }

public getEstilosMariposa(){

  return this.http.get(this.baseUrl); 
}

}