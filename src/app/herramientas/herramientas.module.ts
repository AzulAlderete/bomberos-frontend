import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHerramientasComponent } from './pages/home-herramientas/home-herramientas.component';
import { ListadoHerramientasComponent } from './pages/listado-herramientas/listado-herramientas.component';
import { AgregarHerramientasComponent } from './pages/agregar-herramientas/agregar-herramientas.component';
import { HerramientasRoutingModule } from './herramientas-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { EditarHerramientasComponent } from './pages/editar-herramientas/editar-herramientas.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
// import { SpinnerComponent } from '../components/spinner/spinner.component';

@NgModule({
  declarations: [
    HomeHerramientasComponent,
    ListadoHerramientasComponent,
    AgregarHerramientasComponent,
    EditarHerramientasComponent,
    // SpinnerComponent,
  ],
  imports: [
    CommonModule,
    HerramientasRoutingModule,
    DataTablesModule,
    FormsModule,
    SharedModule,
  ],
})
export class HerramientasModule {}
