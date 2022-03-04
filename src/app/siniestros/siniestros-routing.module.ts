import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SiniestrosHomeComponent } from './pages/siniestros-home/siniestros-home.component';
import { SiniestrosListadoComponent } from './pages/siniestros-listado/siniestros-listado.component';
import { SiniestrosAgregarComponent } from './pages/siniestros-agregar/siniestros-agregar.component';
import { SiniestrosEditarComponent } from './pages/siniestros-editar/siniestros-editar.component';

const routes: Routes = [
  {
    path: '',
    component: SiniestrosHomeComponent,
    children: [
      { path: 'listado', component: SiniestrosListadoComponent },
      { path: 'agregar', component: SiniestrosAgregarComponent },
      { path: 'editar/:id', component: SiniestrosEditarComponent },
      { path: '**', redirectTo: 'listado' },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiniestrosRoutingModule {}
