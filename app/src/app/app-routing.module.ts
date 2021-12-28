import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// voy agregando rutas para que vaya cargando lo modulos una vez que le solicito info
const routes: Routes = [
  {
    path: `libre`, loadChildren: () =>
      import('./features/libre/libre.module').then( m => m.LibreModule)
  },
  {
    path: `mariposa`, loadChildren: () =>
      import('./features/mariposa/mariposa.module').then( m => m.MariposaModule)
  },
  {
    path: `espalda`, loadChildren: () =>
      import('./features/espalda/espalda.module').then( m => m.EspaldaModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
