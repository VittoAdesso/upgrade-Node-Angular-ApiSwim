import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Ilibre } from '../../models/ilibre';
import { LibreServicesService } from './../../services/libre-services.service';
@Component({
  selector: 'app-libre',
  templateUrl: './libre.component.html',
  styleUrls: ['./libre.component.scss']
})
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
}

