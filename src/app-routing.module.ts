import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'atendimento',
    loadChildren: () => import('./servicos/atendimento/atendimento.module').then(m => m.AtendimentoPageModule)
  },
  {
    path: 'relatorio',
    loadChildren: () => import('./servicos/relatorio/relatorio.module').then(m => m.RelatorioPageModule)
  },
  {
    path: 'senha',
    loadChildren: () => import('./servicos/senha/senha.module').then(m => m.SenhaPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
