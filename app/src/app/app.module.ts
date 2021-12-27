import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // incluyo la posibilidad de hacer peticiones
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule  // incluyo lel importador para hacer peticiones
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
