import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SenhaPage } from './senha.page';
import { SenhaPageRoutingModule } from './senha-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    SenhaPageRoutingModule
  ],
  declarations: [SenhaPage]
})
export class SenhaPageModule {}
