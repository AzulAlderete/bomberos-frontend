import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BocasDeAguaHomeComponent } from './pages/bocas-de-agua-home/bocas-de-agua-home.component';
import { BocasDeAguaListadoComponent } from './pages/bocas-de-agua-listado/bocas-de-agua-listado.component';
import { BocasDeAguaAgregarComponent } from './pages/bocas-de-agua-agregar/bocas-de-agua-agregar.component';
import { BocasDeAguaEditarComponent } from './pages/bocas-de-agua-editar/bocas-de-agua-editar.component';

const routes: Routes = [
  {
    path: '',
    component: BocasDeAguaHomeComponent,
    children: [
      { path: 'listado', component: BocasDeAguaListadoComponent },
      { path: 'agregar', component: BocasDeAguaAgregarComponent },
      { path: 'editar/:id', component: BocasDeAguaEditarComponent },
      { path: '**', redirectTo: 'listado' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BocasDeAguaRoutingModule {}
