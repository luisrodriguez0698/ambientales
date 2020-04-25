import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbiacionesPage } from './ubiaciones.page';

const routes: Routes = [
  {
    path: '',
    component: UbiacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UbiacionesPageRoutingModule {}
