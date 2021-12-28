import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibreComponent } from './components/libre/libre.component';

const routes: Routes = [

{path: '', component: LibreComponent}
]; // ahora lo defino en app-routing, ya que voy a trabajar con lazy loading, carga por módulos

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibreRoutingModule { }
