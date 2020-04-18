import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantillainfoPage } from './plantillainfo.page';

const routes: Routes = [
  {
    path: '',
    component: PlantillainfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantillainfoPageRoutingModule {}
