import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarHerramientasComponent } from './pages/agregar-herramientas/agregar-herramientas.component';
import { EditarHerramientasComponent } from './pages/editar-herramientas/editar-herramientas.component';
import { HomeHerramientasComponent } from './pages/home-herramientas/home-herramientas.component';
import { ListadoHerramientasComponent } from './pages/listado-herramientas/listado-herramientas.component';

const routes: Routes = [
  {
    path: '',
    component: HomeHerramientasComponent,
    children: [
      { path: 'listado', component: ListadoHerramientasComponent },
      { path: 'agregar', component: AgregarHerramientasComponent },
      { path: 'editar/:id', component: EditarHerramientasComponent },
      { path: '**', redirectTo: 'listado' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HerramientasRoutingModule {}
