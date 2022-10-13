import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio-rutina',
    pathMatch: 'full'
  },
  {
    path: 'inicio-rutina',
    loadChildren: () => import('./pages/inicio-rutina/inicio-rutina.module').then( m => m.InicioRutinaPageModule)
  },
  {
    path: 'rutina-ejercicios',
    loadChildren: () => import('./pages/rutina-ejercicios/rutina-ejercicios.module').then( m => m.RutinaEjerciciosPageModule)
  },
  {
    path: 'rutina7',
    loadChildren: () => import('./pages/rutina7/rutina7.module').then( m => m.Rutina7PageModule)
  },
  {
    path: 'calcular-imc',
    loadChildren: () => import('./pages/calcular-imc/calcular-imc.module').then( m => m.CalcularImcPageModule)
  },
  {
    path: 'clases-emoti',
    loadChildren: () => import('./pages/clases-emoti/clases-emoti.module').then( m => m.ClasesEmotiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
