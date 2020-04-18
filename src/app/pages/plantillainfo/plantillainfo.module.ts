import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlantillainfoPageRoutingModule } from './plantillainfo-routing.module';

import { PlantillainfoPage } from './plantillainfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantillainfoPageRoutingModule
  ],
  declarations: [PlantillainfoPage]
})
export class PlantillainfoPageModule {}
