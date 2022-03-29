import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { CreateCholloComponent } from './admin/table-chollo/create-chollo/create-chollo.component';
import { EditCholloComponent } from './admin/table-chollo/edit-chollo/edit-chollo.component';
import { TableCholloComponent } from './admin/table-chollo/table-chollo.component';
import { CreateHotelComponent } from './admin/table-hotel/create-hotel/create-hotel.component';
import { EditHotelComponent } from './admin/table-hotel/edit-hotel/edit-hotel.component';
import { TableHotelComponent } from './admin/table-hotel/table-hotel.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ViajeComponent } from './viaje/viaje.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'viaje',
    component: ViajeComponent
  },
  {

    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contactanos',
    component: ContactanosComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
  path: 'admin',
    component: AdminComponent
  },
  {
  path: 'admin/table-hotel',
    component: TableHotelComponent
  },
  {
  path: 'admin/table-hotel/create-hotel',
    component: CreateHotelComponent
  },
  {
    path: 'admin/table-hotel/edit-hotel',
      component: EditHotelComponent
  },
  {
    path: 'admin/table-chollo',
      component: TableCholloComponent
  },
  {
    path: 'admin/table-chollo/create-chollo',
      component: CreateCholloComponent
  },
  {
    path: 'admin/table-chollo/edit-chollo',
      component: EditCholloComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
