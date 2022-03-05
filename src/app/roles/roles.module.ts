import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesHomeComponent } from './pages/roles-home/roles-home.component';
import { RolesListadoComponent } from './pages/roles-listado/roles-listado.component';
import { RolesAgregarComponent } from './pages/roles-agregar/roles-agregar.component';
import { RolesEditarComponent } from './pages/roles-editar/roles-editar.component';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';
import { RolesRoutingModule } from './roles-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RolesHomeComponent,
    RolesListadoComponent,
    RolesAgregarComponent,
    RolesEditarComponent,
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    SharedModule,
    RolesRoutingModule,
    FormsModule,
  ],
})
export class RolesModule {}
