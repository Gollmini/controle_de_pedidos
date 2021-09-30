import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigntarurePage } from './signtarure.page';

const routes: Routes = [
  {
    path: '',
    component: SigntarurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigntarurePageRoutingModule {}
