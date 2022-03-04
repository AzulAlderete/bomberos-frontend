import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosHomeComponent } from './pages/vehiculos-home/vehiculos-home.component';
import { VehiculosListadoComponent } from './pages/vehiculos-listado/vehiculos-listado.component';
import { VehiculosAgregarComponent } from './pages/vehiculos-agregar/vehiculos-agregar.component';

const routes: Routes = [
  {
    path: '',
    component: VehiculosHomeComponent,
    children: [
      { path: 'listado', component: VehiculosListadoComponent },
      { path: 'agregar', component: VehiculosAgregarComponent },
      { path: '**', redirectTo: 'listado' },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculosRoutingModule {}
