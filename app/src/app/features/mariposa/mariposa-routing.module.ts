import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MariposaComponent } from './components/mariposa/mariposa.component';

const routes: Routes = [

  {path: '', component: MariposaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MariposaRoutingModule { }
