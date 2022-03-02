import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaHomeComponent } from './pages/area-home/area-home.component';
import { AreaListadoComponent } from './pages/area-listado/area-listado.component';
import { AreaAgregarComponent } from './pages/area-agregar/area-agregar.component';
import { AreaRoutingModule } from './area-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AreaHomeComponent, AreaListadoComponent, AreaAgregarComponent],
  imports: [CommonModule, AreaRoutingModule, DataTablesModule, SharedModule],
})
export class AreaModule {}
