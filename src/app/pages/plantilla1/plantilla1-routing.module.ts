import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Plantilla1Page } from './plantilla1.page';

const routes: Routes = [
  {
    path: '',
    component: Plantilla1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Plantilla1PageRoutingModule {}
