import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SolicitantesHomeComponent } from './pages/solicitantes-home/solicitantes-home.component';
import { SolicitantesListadoComponent } from './pages/solicitantes-listado/solicitantes-listado.component';
import { SolicitantesAgregarComponent } from './pages/solicitantes-agregar/solicitantes-agregar.component';
import { SolicitantesEditarComponent } from './pages/solicitantes-editar/solicitantes-editar.component';

const routes: Routes = [
  {
    path: '',
    component: SolicitantesHomeComponent,
    children: [
      { path: 'listado', component: SolicitantesListadoComponent },
      { path: 'agregar', component: SolicitantesAgregarComponent },
      { path: 'editar/:id', component: SolicitantesEditarComponent },
      { path: '**', redirectTo: 'listado' },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitantesRoutingModule {}
