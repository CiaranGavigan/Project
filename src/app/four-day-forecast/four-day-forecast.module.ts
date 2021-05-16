import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FourDayForecastPageRoutingModule } from './four-day-forecast-routing.module';

import { FourDayForecastPage } from './four-day-forecast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FourDayForecastPageRoutingModule
  ],
  declarations: [FourDayForecastPage]
})
export class FourDayForecastPageModule {}
