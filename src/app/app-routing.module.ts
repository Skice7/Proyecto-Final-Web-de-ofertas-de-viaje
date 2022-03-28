import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { CreateComponent } from './admin/create/create.component';
import { EditComponent } from './admin/edit/edit.component';
import { TableComponent } from './admin/table/table.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { DestinosComponent } from './destinos/destinos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'destinos',
    component: DestinosComponent
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
  path: 'admin/table',
    component: TableComponent
  },
  {
    path: 'admin/table/create',
      component: CreateComponent
    },
    {
      path: 'admin/table/edit',
        component: EditComponent
      },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
