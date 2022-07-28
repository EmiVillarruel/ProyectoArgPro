import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IlustracionComponent } from './components/ilustracion/ilustracion.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LogosComponent } from './components/logos/logos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IlustracionComponent,
    PerfilComponent,
    LogosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
