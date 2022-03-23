import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { DestinosComponent } from './destinos/destinos.component';
import { EscapadasComponent } from './escapadas/escapadas.component';
import { FechasDestacadasComponent } from './fechas-destacadas/fechas-destacadas.component';
import { HomeComponent } from './home/home.component';
import { RegimenesComponent } from './regimenes/regimenes.component';
import { TematicasComponent } from './tematicas/tematicas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'destinos',
    component:DestinosComponent
  },
  {
  path:'tematicas',
    component:TematicasComponent
  },
  {
  path:'fechas-destacadas',
    component:FechasDestacadasComponent
  },
  {
    path:'regimenes',
      component:RegimenesComponent
    },
  {
    path:'escapadas',
      component:EscapadasComponent
    },
    {
      path:'usuarios',
        component:UsuariosComponent
      },
    {
      path:'about',
        component:AboutComponent
      },
      {
        path:'contactanos',
          component:ContactanosComponent
        },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
