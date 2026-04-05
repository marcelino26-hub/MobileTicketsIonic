{
  path: 'atendimento',
  loadChildren: () => import('./servicos/atendimento/atendimento.module').then(m => m.AtendimentoPageModule)
}
{
  path: 'relatorio',
  loadChildren: () => import('./servicos/relatorio/relatorio.module').then(m => m.RelatorioPageModule)
},
{
  path: 'senha',
  loadChildren: () => import('./servicos/senha/senha.module').then(m => m.SenhaPageModule)
}
