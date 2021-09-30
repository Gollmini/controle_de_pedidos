import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigntarurePageRoutingModule } from './signtarure-routing.module';

import { SigntarurePage } from './signtarure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigntarurePageRoutingModule
  ],
  declarations: [SigntarurePage]
})
export class SigntarurePageModule {}
