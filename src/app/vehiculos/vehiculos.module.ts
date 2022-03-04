import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosAgregarComponent } from './pages/vehiculos-agregar/vehiculos-agregar.component';
import { VehiculosListadoComponent } from './pages/vehiculos-listado/vehiculos-listado.component';
import { VehiculosHomeComponent } from './pages/vehiculos-home/vehiculos-home.component';
import { VehiculosRoutingModule } from './vehiculos-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    VehiculosAgregarComponent,
    VehiculosListadoComponent,
    VehiculosHomeComponent,
  ],
  imports: [CommonModule, VehiculosRoutingModule, DataTablesModule, SharedModule],
})
export class VehiculosModule {}
