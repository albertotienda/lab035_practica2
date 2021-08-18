import { ClientesModule } from './clientes/clientes.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClientesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
