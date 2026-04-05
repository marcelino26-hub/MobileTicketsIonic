import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', // 🔥 começa no login
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'tickets',
    loadChildren: () => import('./tickets/tickets.module').then(m => m.TicketsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
