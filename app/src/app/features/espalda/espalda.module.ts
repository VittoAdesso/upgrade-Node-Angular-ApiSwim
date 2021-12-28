import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspaldaRoutingModule } from './espalda-routing.module';
import { EspaldaComponent } from './components/espalda/espalda.component';


@NgModule({
  declarations: [
    EspaldaComponent
  ],
  imports: [
    CommonModule,
    EspaldaRoutingModule
  ]
})
export class EspaldaModule { }
