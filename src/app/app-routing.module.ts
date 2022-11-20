import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { LoginComponent } from './auth/pages/login/login.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'auth/login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'tipo-herramientas',
    loadChildren: () =>
      import('./tipo-herramientas/tipo-herramientas.module').then(
        (m) => m.TipoHerramientasModule
      ),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'herramientas',
    loadChildren: () =>
      import('./herramientas/herramientas.module').then(
        (m) => m.HerramientasModule
      ),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'tipo-vehiculos',
    loadChildren: () =>
      import('./tipo-vehiculos/tipo-vehiculos.module').then(
        (m) => m.TipoVehiculosModule
      ),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'vehiculos',
    loadChildren: () =>
      import('./vehiculos/vehiculos.module').then((m) => m.VehiculosModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'areas',
    loadChildren: () => import('./area/area.module').then((m) => m.AreaModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'rangos',
    loadChildren: () =>
      import('./rangos/rangos.module').then((m) => m.RangosModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'bocas-de-agua',
    loadChildren: () =>
      import('./bocas-de-agua/bocas-de-agua.module').then(
        (m) => m.BocasDeAguaModule
      ),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'roles',
    loadChildren: () =>
      import('./roles/roles.module').then((m) => m.RolesModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./usuarios/usuarios.module').then((m) => m.UsuariosModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'siniestros',
    loadChildren: () =>
      import('./siniestros/siniestros.module').then((m) => m.SiniestrosModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'tipo-siniestros',
    loadChildren: () =>
      import('./tipo-siniestros/tipo-siniestros.module').then(
        (m) => m.TipoSiniestrosModule
      ),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'solicitantes',
    loadChildren: () =>
      import('./solicitantes/solicitantes.module').then(
        (m) => m.SolicitantesModule
      ),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: 'voluntarios',
    loadChildren: () =>
      import('./voluntarios/voluntarios.module').then(
        (m) => m.VoluntariosModule
      ),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
