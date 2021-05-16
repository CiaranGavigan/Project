import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomorrowsForecastPageRoutingModule } from './tomorrows-forecast-routing.module';

import { TomorrowsForecastPage } from './tomorrows-forecast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomorrowsForecastPageRoutingModule
  ],
  declarations: [TomorrowsForecastPage]
})
export class TomorrowsForecastPageModule {}
