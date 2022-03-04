import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosHomeComponent } from './pages/usuarios-home/usuarios-home.component';
import { UsuariosListadoComponent } from './pages/usuarios-listado/usuarios-listado.component';
import { UsuariosAgregarComponent } from './pages/usuarios-agregar/usuarios-agregar.component';
import { UsuariosEditarComponent } from './pages/usuarios-editar/usuarios-editar.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosHomeComponent,
    children: [
      { path: 'listado', component: UsuariosListadoComponent },
      { path: 'agregar', component: UsuariosAgregarComponent },
      { path: 'editar/:id', component: UsuariosEditarComponent },
      { path: '**', redirectTo: 'listado' },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
