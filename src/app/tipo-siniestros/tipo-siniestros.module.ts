import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoSiniestrosHomeComponent } from './pages/tipo-siniestros-home/tipo-siniestros-home.component';
import { TipoSiniestrosListadoComponent } from './pages/tipo-siniestros-listado/tipo-siniestros-listado.component';
import { TipoSiniestrosAgregarComponent } from './pages/tipo-siniestros-agregar/tipo-siniestros-agregar.component';
import { TipoSiniestrosEditarComponent } from './pages/tipo-siniestros-editar/tipo-siniestros-editar.component';
import { SharedModule } from '../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { TipoSiniestrosRoutingModule } from './tipo-siniestros-routing.module';

@NgModule({
  declarations: [
    TipoSiniestrosHomeComponent,
    TipoSiniestrosListadoComponent,
    TipoSiniestrosAgregarComponent,
    TipoSiniestrosEditarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule,
    FormsModule,
    TipoSiniestrosRoutingModule,
  ],
})
export class TipoSiniestrosModule {}
