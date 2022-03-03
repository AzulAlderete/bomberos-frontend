import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BocasDeAguaHomeComponent } from './pages/bocas-de-agua-home/bocas-de-agua-home.component';
import { BocasDeAguaListadoComponent } from './pages/bocas-de-agua-listado/bocas-de-agua-listado.component';
import { BocasDeAguaAgregarComponent } from './pages/bocas-de-agua-agregar/bocas-de-agua-agregar.component';
import { BocasDeAguaRoutingModule } from './bocas-de-agua-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { BocasDeAguaEditarComponent } from './pages/bocas-de-agua-editar/bocas-de-agua-editar.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BocasDeAguaHomeComponent,
    BocasDeAguaListadoComponent,
    BocasDeAguaAgregarComponent,
    BocasDeAguaEditarComponent,
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    BocasDeAguaRoutingModule,
    FormsModule,
    SharedModule,
  ],
})
export class BocasDeAguaModule {}
