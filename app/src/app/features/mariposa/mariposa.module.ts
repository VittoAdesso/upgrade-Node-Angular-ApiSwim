import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MariposaRoutingModule } from './mariposa-routing.module';
import { MariposaComponent } from './components/mariposa/mariposa.component';


@NgModule({
  declarations: [
    MariposaComponent
  ],
  imports: [
    CommonModule,
    MariposaRoutingModule
  ]
})
export class MariposaModule { }
