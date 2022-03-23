import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DestinosComponent } from './destinos/destinos.component';
import { FechasDestacadasComponent } from './fechas-destacadas/fechas-destacadas.component';
import { RegimenesComponent } from './regimenes/regimenes.component';
import { TematicasComponent } from './tematicas/tematicas.component';
import { EscapadasComponent } from './escapadas/escapadas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AboutComponent } from './about/about.component';
import { ContactanosComponent } from './contactanos/contactanos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestinosComponent,
    FechasDestacadasComponent,
    RegimenesComponent,
    TematicasComponent,
    EscapadasComponent,
    UsuariosComponent,
    AboutComponent,
    ContactanosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
