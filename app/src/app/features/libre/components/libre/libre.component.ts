import { Component, OnInit } from '@angular/core';
import { Ilibre } from '../../models/ilibre';
import { LibreServicesService } from './../../services/libre-services.service';

@Component({
  selector: 'app-libre',
  templateUrl: './libre.component.html',
  styleUrls: ['./libre.component.scss']
})
export class LibreComponent implements OnInit {

  public libreLista: Ilibre[] = [];

  constructor(private libreServicio: LibreServicesService) { }

  ngOnInit(): void {

    this.recoverEstilosLibres(); 
  }


public recoverEstilosLibres() {
  return this.libreServicio.getLibre(); 

}

}
