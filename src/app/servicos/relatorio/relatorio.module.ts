import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { RelatorioPage } from './relatorio.page';
import { RelatorioPageRoutingModule } from './relatorio-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RelatorioPageRoutingModule
  ],
  declarations: [RelatorioPage]
})
export class RelatorioPageModule {}
