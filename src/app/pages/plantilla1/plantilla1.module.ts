import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Plantilla1PageRoutingModule } from './plantilla1-routing.module';

import { Plantilla1Page } from './plantilla1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Plantilla1PageRoutingModule
  ],
  declarations: [Plantilla1Page]
})
export class Plantilla1PageModule {}
