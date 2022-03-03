import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarTipoHerramientasComponent } from './pages/agregar-tipo-herramientas/agregar-tipo-herramientas.component';
import { EditarTipoHerramientasComponent } from './pages/editar-tipo-herramientas/editar-tipo-herramientas.component';
import { HomeTipoHerramientasComponent } from './pages/home-tipo-herramientas/home-tipo-herramientas.component';
import { ListadoTipoHerramientasComponent } from './pages/listado-tipo-herramientas/listado-tipo-herramientas.component';

const routes: Routes = [
  {
    path: '',
    component: HomeTipoHerramientasComponent,
    children: [
      { path: 'listado', component: ListadoTipoHerramientasComponent },
      { path: 'agregar', component: AgregarTipoHerramientasComponent },
      { path: 'editar/:id', component: EditarTipoHerramientasComponent },
      { path: '**', redirectTo: 'listado' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoHerramientasRoutingModule {}
