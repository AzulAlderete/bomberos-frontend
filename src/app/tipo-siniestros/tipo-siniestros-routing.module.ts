import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TipoSiniestrosHomeComponent } from './pages/tipo-siniestros-home/tipo-siniestros-home.component';
import { TipoSiniestrosListadoComponent } from './pages/tipo-siniestros-listado/tipo-siniestros-listado.component';
import { TipoSiniestrosAgregarComponent } from './pages/tipo-siniestros-agregar/tipo-siniestros-agregar.component';
import { TipoSiniestrosEditarComponent } from './pages/tipo-siniestros-editar/tipo-siniestros-editar.component';

const routes: Routes = [
  {
    path: '',
    component: TipoSiniestrosHomeComponent,
    children: [
      { path: 'listado', component: TipoSiniestrosListadoComponent },
      { path: 'agregar', component: TipoSiniestrosAgregarComponent },
      { path: 'editar/:id', component: TipoSiniestrosEditarComponent },
      { path: '**', redirectTo: 'listado' },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoSiniestrosRoutingModule {}
