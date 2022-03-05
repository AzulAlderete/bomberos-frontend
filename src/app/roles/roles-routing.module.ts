import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RolesHomeComponent } from './pages/roles-home/roles-home.component';
import { RolesListadoComponent } from './pages/roles-listado/roles-listado.component';
import { RolesAgregarComponent } from './pages/roles-agregar/roles-agregar.component';
import { RolesEditarComponent } from './pages/roles-editar/roles-editar.component';

const routes: Routes = [
  {
    path: '',
    component: RolesHomeComponent,
    children: [
      { path: 'listado', component: RolesListadoComponent },
      { path: 'agregar', component: RolesAgregarComponent },
      { path: 'editar/:id', component: RolesEditarComponent },
      { path: '**', redirectTo: 'listado' },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolesRoutingModule {}
