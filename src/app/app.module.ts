import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViajeComponent } from './viaje/viaje.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AboutComponent } from './about/about.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { TableHotelComponent } from './admin/table-hotel/table-hotel.component';
import { DataTablesModule } from 'angular-datatables';
import {HttpClientModule} from '@angular/common/http';
import { TableCholloComponent } from './admin/table-chollo/table-chollo.component';
import { CreateHotelComponent } from './admin/table-hotel/create-hotel/create-hotel.component';
import { EditHotelComponent } from './admin/table-hotel/edit-hotel/edit-hotel.component';
import { CreateCholloComponent } from './admin/table-chollo/create-chollo/create-chollo.component';
import { EditCholloComponent } from './admin/table-chollo/edit-chollo/edit-chollo.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViajeComponent,
    UsuariosComponent,
    AboutComponent,
    ContactanosComponent,
    LoginComponent,
    AdminComponent,
    TableHotelComponent,
    TableCholloComponent,
    CreateHotelComponent,
    EditHotelComponent,
    CreateCholloComponent,
    EditCholloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
