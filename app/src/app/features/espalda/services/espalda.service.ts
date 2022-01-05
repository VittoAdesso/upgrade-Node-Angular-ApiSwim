import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EspaldaService {

  private baseUrl: string = "http://localhost:5000/espalda"; 
  constructor(private http: HttpClient) { }

  public getEstilosEspalda(){

    return this.http.get(this.baseUrl); 
  }


}





  



