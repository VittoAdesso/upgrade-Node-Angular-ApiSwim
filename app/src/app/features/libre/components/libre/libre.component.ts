import { Component, OnInit } from '@angular/core';
import { Ilibre } from '../../models/ilibre';
import { LibreServicesService } from './../../services/libre-services.service';
@Component({
  selector: 'app-libre',
  templateUrl: './libre.component.html',
  styleUrls: ['./libre.component.scss']
})

export class LibreComponent implements OnInit {
      public EstiloLibre: Ilibre[] = []; // es una variable que 
      constructor(private libreServicesService: LibreServicesService ) { } 

      ngOnInit(): void {
        
        this.recoverList(); 
       
      }

      public recoverList(){
      this.libreServicesService.getEstilosLibre().subscribe((data: any) =>{ 

          const results: Ilibre[] = data.libre; 
  
          const trasnformLista = results.map(({title, img, description }) => ({
            title, 
            img, 
            description

          })); 
               this.EstiloLibre = trasnformLista; 
          })
    }
}












/*
export class LibreComponent implements OnInit {

  public libreLista: Ilibre[] = [];
  requestService: any;
  indexCroll: number | null = null;
  isOpen: boolean = false;

  protected readonly clearSubscriptions$ = new Subject();
  
  constructor(private libreServicio: LibreServicesService) { }

  ngOnInit(): void {

     this.recoverEstilosLibres(); 
    }

    public ngOnDestroy() {
      this.clearSubscriptions$.complete();
    }
   
     public recoverEstilosLibres() {
         return this.libreServicio.getLibre().pipe(takeUntil(this.clearSubscriptions$),).subscribe((data: any)=> {
           this.libreLista = data.libre; 
          //  this.libreLista = data 
   }) 
}
  openCroll(index: number) {
    this.indexCroll !== null ? this.indexCroll =  null : this.indexCroll = index;  
  
 }
} */

