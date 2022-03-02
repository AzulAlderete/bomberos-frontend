import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangosHomeComponent } from './pages/rangos-home/rangos-home.component';
import { RangosListadoComponent } from './pages/rangos-listado/rangos-listado.component';
import { RangosAgregarComponent } from './pages/rangos-agregar/rangos-agregar.component';
import { RangosRoutingModule } from './rangos-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RangosHomeComponent,
    RangosListadoComponent,
    RangosAgregarComponent,
  ],
  imports: [CommonModule, RangosRoutingModule, DataTablesModule, SharedModule],
})
export class RangosModule {}
