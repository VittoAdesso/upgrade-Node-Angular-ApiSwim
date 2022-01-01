import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibreRoutingModule } from './libre-routing.module';
import { LibreComponent } from './components/libre/libre.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LibreComponent
  ],
  imports: [
    CommonModule,
    LibreRoutingModule,
    HttpClientModule
  ]
})
export class LibreModule { }
