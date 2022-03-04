import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiniestrosHomeComponent } from './pages/siniestros-home/siniestros-home.component';
import { SiniestrosListadoComponent } from './pages/siniestros-listado/siniestros-listado.component';
import { SiniestrosAgregarComponent } from './pages/siniestros-agregar/siniestros-agregar.component';
import { SiniestrosEditarComponent } from './pages/siniestros-editar/siniestros-editar.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { SiniestrosRoutingModule } from './siniestros-routing.module';

@NgModule({
  declarations: [
    SiniestrosHomeComponent,
    SiniestrosListadoComponent,
    SiniestrosAgregarComponent,
    SiniestrosEditarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    DataTablesModule,
    SiniestrosRoutingModule,
  ],
})
export class SiniestrosModule {}
