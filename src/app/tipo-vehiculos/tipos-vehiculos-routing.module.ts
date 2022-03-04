import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TipoVehiculosHomeComponent } from './pages/tipo-vehiculos-home/tipo-vehiculos-home.component';
import { TipoVehiculosListadoComponent } from './pages/tipo-vehiculos-listado/tipo-vehiculos-listado.component';
import { TipoVehiculosAgregarComponent } from './pages/tipo-vehiculos-agregar/tipo-vehiculos-agregar.component';

const routes: Routes = [
  {
    path: '',
    component: TipoVehiculosHomeComponent,
    children: [
      { path: 'listado', component: TipoVehiculosListadoComponent },
      { path: 'agregar', component: TipoVehiculosAgregarComponent },
      { path: '**', redirectTo: 'listado' },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiposVehiculosRoutingModule {}
