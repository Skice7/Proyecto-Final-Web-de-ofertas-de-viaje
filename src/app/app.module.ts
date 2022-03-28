import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DestinosComponent } from './destinos/destinos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AboutComponent } from './about/about.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CreateComponent } from './admin/create/create.component';
import { TableComponent } from './admin/table/table.component';
import { EditComponent } from './admin/edit/edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestinosComponent,
    UsuariosComponent,
    AboutComponent,
    ContactanosComponent,
    LoginComponent,
    AdminComponent,
    CreateComponent,
    TableComponent,
    EditComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
