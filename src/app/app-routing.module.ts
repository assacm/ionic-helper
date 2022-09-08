import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'log-in',
    pathMatch: 'full'
  },
  {
    path: 'log-in',
    loadChildren: () => import('./log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./pacientes/pacientes.module').then( m => m.PacientesPageModule)
  },
  {
    path: 'dispositivos',
    loadChildren: () => import('./dispositivos/dispositivos.module').then( m => m.DispositivosPageModule)
  },
  {
    path: 'contactos',
    loadChildren: () => import('./contactos/contactos.module').then( m => m.ContactosPageModule)
  },
  {
    path: 'ayuda',
    loadChildren: () => import('./ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'info-paciente/:id',
    loadChildren: () => import('./info-paciente/info-paciente.module').then( m => m.InfoPacientePageModule)
  },
  {
    path: 'registrar-cuidador',
    loadChildren: () => import('./registrar-cuidador/registrar-cuidador.module').then( m => m.RegistrarCuidadorPageModule)
  },
  {
    path: 'editar-paciente/:id',
    loadChildren: () => import('./editar-paciente/editar-paciente.module').then( m => m.EditarPacientePageModule)
  },
  {
    path: 'registrar-disp',
    loadChildren: () => import('./registrar-disp/registrar-disp.module').then( m => m.RegistrarDispPageModule)
  },
  {
    path: 'registro-paciente',
    loadChildren: () => import('./registro-paciente/registro-paciente.module').then( m => m.RegistroPacientePageModule)
  },
  {
    path: 'lista-contactos',
    loadChildren: () => import('./lista-contactos/lista-contactos.module').then( m => m.ListaContactosPageModule)
  },
  {
    path: 'crear-contacto',
    loadChildren: () => import('./crear-contacto/crear-contacto.module').then( m => m.CrearContactoPageModule)
  },
  {
    path: 'editar-contacto',
    loadChildren: () => import('./editar-contacto/editar-contacto.module').then( m => m.EditarContactoPageModule)
  },
  {
    path: 'ambulancia',
    loadChildren: () => import('./ambulancia/ambulancia.module').then( m => m.AmbulanciaPageModule)
  },
  {
    path: 'info-contacto',
    loadChildren: () => import('./info-contacto/info-contacto.module').then( m => m.InfoContactoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
