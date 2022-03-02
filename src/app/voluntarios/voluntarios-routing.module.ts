import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VoluntariosHomeComponent } from './pages/voluntarios-home/voluntarios-home.component';
import { VoluntariosListadoComponent } from './pages/voluntarios-listado/voluntarios-listado.component';
import { VoluntariosAgregarComponent } from './pages/voluntarios-agregar/voluntarios-agregar.component';
import { VoluntariosEditarComponent } from './pages/voluntarios-editar/voluntarios-editar.component';

const routes: Routes = [
  {
    path: '',
    component: VoluntariosHomeComponent,
    children: [
      { path: 'listado', component: VoluntariosListadoComponent },
      { path: 'agregar', component: VoluntariosAgregarComponent },
      { path: 'editar/:id', component: VoluntariosEditarComponent },
      { path: '**', redirectTo: 'listado' },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoluntariosRoutingModule {}
