import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitantesHomeComponent } from './pages/solicitantes-home/solicitantes-home.component';
import { SolicitantesListadoComponent } from './pages/solicitantes-listado/solicitantes-listado.component';
import { SolicitantesAgregarComponent } from './pages/solicitantes-agregar/solicitantes-agregar.component';
import { SolicitantesEditarComponent } from './pages/solicitantes-editar/solicitantes-editar.component';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SolicitantesRoutingModule } from './solicitantes-routing.module';

@NgModule({
  declarations: [
    SolicitantesHomeComponent,
    SolicitantesListadoComponent,
    SolicitantesAgregarComponent,
    SolicitantesEditarComponent,
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    SharedModule,
    FormsModule,
    SolicitantesRoutingModule,
  ],
})
export class SolicitantesModule {}
