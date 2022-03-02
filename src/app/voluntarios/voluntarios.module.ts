import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoluntariosHomeComponent } from './pages/voluntarios-home/voluntarios-home.component';
import { VoluntariosListadoComponent } from './pages/voluntarios-listado/voluntarios-listado.component';
import { VoluntariosAgregarComponent } from './pages/voluntarios-agregar/voluntarios-agregar.component';
import { VoluntariosEditarComponent } from './pages/voluntarios-editar/voluntarios-editar.component';
import { SharedModule } from '../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { VoluntariosRoutingModule } from './voluntarios-routing.module';

@NgModule({
  declarations: [
    VoluntariosHomeComponent,
    VoluntariosListadoComponent,
    VoluntariosAgregarComponent,
    VoluntariosEditarComponent,
  ],
  imports: [CommonModule, SharedModule, DataTablesModule, FormsModule, VoluntariosRoutingModule],
})
export class VoluntariosModule {}
