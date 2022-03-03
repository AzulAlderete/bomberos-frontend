import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
// import { SpinnerComponent } from '../components/spinner/spinner.component';
import { AgregarTipoHerramientasComponent } from './pages/agregar-tipo-herramientas/agregar-tipo-herramientas.component';
import { HomeTipoHerramientasComponent } from './pages/home-tipo-herramientas/home-tipo-herramientas.component';
import { ListadoTipoHerramientasComponent } from './pages/listado-tipo-herramientas/listado-tipo-herramientas.component';
import { TipoHerramientasRoutingModule } from './tipo-herramientas-routing.module';
import { EditarTipoHerramientasComponent } from './pages/editar-tipo-herramientas/editar-tipo-herramientas.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeTipoHerramientasComponent,
    ListadoTipoHerramientasComponent,
    AgregarTipoHerramientasComponent,
    EditarTipoHerramientasComponent,
    // SpinnerComponent,
  ],
  imports: [
    CommonModule,
    TipoHerramientasRoutingModule,
    DataTablesModule,
    FormsModule,
    SharedModule,
  ],
})
export class TipoHerramientasModule {}
