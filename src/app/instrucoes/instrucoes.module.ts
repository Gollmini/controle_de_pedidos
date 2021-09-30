import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstrucoesPageRoutingModule } from './instrucoes-routing.module';

import { InstrucoesPage } from './instrucoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstrucoesPageRoutingModule
  ],
  declarations: [InstrucoesPage]
})
export class InstrucoesPageModule {}
