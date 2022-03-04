import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosHomeComponent } from './pages/usuarios-home/usuarios-home.component';
import { UsuariosAgregarComponent } from './pages/usuarios-agregar/usuarios-agregar.component';
import { UsuariosListadoComponent } from './pages/usuarios-listado/usuarios-listado.component';
import { UsuariosEditarComponent } from './pages/usuarios-editar/usuarios-editar.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UsuariosRoutingModule } from './usuarios-routing.module';



@NgModule({
  declarations: [
    UsuariosHomeComponent,
    UsuariosAgregarComponent,
    UsuariosListadoComponent,
    UsuariosEditarComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    SharedModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
