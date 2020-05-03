import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'videos/:id',
    loadChildren: () => import('./pages/videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'plantilla1/:id',
    loadChildren: () => import('./pages/plantilla1/plantilla1.module').then( m => m.Plantilla1PageModule)
  },
  {
    path: 'ubiaciones',
    loadChildren: () => import('./pages/ubiaciones/ubiaciones.module').then( m => m.UbiacionesPageModule)
  },
  {
    path: 'desafio/:id',
    loadChildren: () => import('./pages/desafio/desafio.module').then( m => m.DesafioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./pages/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'sabiasque/:id',
    loadChildren: () => import('./pages/sabiasque/sabiasque.module').then( m => m.SabiasquePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
