import { Component, OnInit } from '@angular/core';
import { IEspalda } from '../../models/iespalda';
import { EspaldaService } from '../../services/espalda.service';

@Component({
  selector: 'app-espalda',
  templateUrl: './espalda.component.html',
  styleUrls: ['./espalda.component.scss']
})
export class EspaldaComponent implements OnInit {

  public EstiloEspalda: IEspalda[] = []; // es una variable que 
      constructor(private espaldaService: EspaldaService ) { } 

      ngOnInit(): void {
        
        this.recoverList(); 
       
      }

      public recoverList(){
      this.espaldaService.getEstilosEspalda().subscribe((data: any) =>{ 

        this.EstiloEspalda = data.data.espalda; 

      })
    }

}
