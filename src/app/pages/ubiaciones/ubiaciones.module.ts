import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbiacionesPageRoutingModule } from './ubiaciones-routing.module';

import { UbiacionesPage } from './ubiaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbiacionesPageRoutingModule
  ],
  declarations: [UbiacionesPage]
})
export class UbiacionesPageModule {}
