import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SevenDayForecastPageRoutingModule } from './seven-day-forecast-routing.module';

import { SevenDayForecastPage } from './seven-day-forecast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SevenDayForecastPageRoutingModule
  ],
  declarations: [SevenDayForecastPage]
})
export class SevenDayForecastPageModule {}
