import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoVehiculosHomeComponent } from './pages/tipo-vehiculos-home/tipo-vehiculos-home.component';
import { TipoVehiculosListadoComponent } from './pages/tipo-vehiculos-listado/tipo-vehiculos-listado.component';
import { TipoVehiculosAgregarComponent } from './pages/tipo-vehiculos-agregar/tipo-vehiculos-agregar.component';
import { TiposVehiculosRoutingModule } from './tipos-vehiculos-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TipoVehiculosHomeComponent,
    TipoVehiculosListadoComponent,
    TipoVehiculosAgregarComponent,
  ],
  imports: [
    CommonModule,
    TiposVehiculosRoutingModule,
    DataTablesModule,
    SharedModule,
    FormsModule,
  ],
})
export class TipoVehiculosModule {}
