import { Component, OnInit } from '@angular/core';
import { Imariposa } from '../../models/imariposa';
import { MariposaService } from '../../services/mariposa.service';

@Component({
  selector: 'app-mariposa',
  templateUrl: './mariposa.component.html',
  styleUrls: ['./mariposa.component.scss']
})
export class MariposaComponent implements OnInit {

  
  public EstiloMariposa: Imariposa[] = []; // es una variable que 
  constructor(private mariposaService: MariposaService ) { } 


  ngOnInit(): void {
    
    this.recoverList(); 
  }


  public recoverList(){
    
    this.mariposaService.getEstilosMariposa().subscribe((data: any) =>{ 
  
        const results: Imariposa[] = data.mariposa; 
  
        const trasnformLista = results.map(({title, img, description }) => ({
          title, 
          img, 
          description
  
        })); 
             this.EstiloMariposa = trasnformLista; 
        })
  }
}

