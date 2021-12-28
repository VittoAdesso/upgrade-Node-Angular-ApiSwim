import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspaldaComponent } from './components/espalda/espalda.component';

const routes: Routes = [
  {path: '', component: EspaldaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspaldaRoutingModule { }
