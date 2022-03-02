import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AreaHomeComponent } from './pages/area-home/area-home.component';
import { AreaListadoComponent } from './pages/area-listado/area-listado.component';
import { AreaAgregarComponent } from './pages/area-agregar/area-agregar.component';

const routes: Routes = [
  {
    path: '',
    component: AreaHomeComponent,
    children: [
      { path: 'listado', component: AreaListadoComponent },
      { path: 'agregar', component: AreaAgregarComponent },
      { path: '**', redirectTo: 'listado' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaRoutingModule {}
