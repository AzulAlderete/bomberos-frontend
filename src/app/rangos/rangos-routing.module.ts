import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RangosHomeComponent } from './pages/rangos-home/rangos-home.component';
import { RangosListadoComponent } from './pages/rangos-listado/rangos-listado.component';
import { RangosAgregarComponent } from './pages/rangos-agregar/rangos-agregar.component';

const routes: Routes = [
  {
    path: '',
    component: RangosHomeComponent,
    children: [
      { path: 'listado', component: RangosListadoComponent },
      { path: 'agregar', component: RangosAgregarComponent },
      { path: '**', redirectTo: 'listado' },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RangosRoutingModule {}
