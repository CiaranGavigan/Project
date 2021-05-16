import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodaysForecastPageRoutingModule } from './todays-forecast-routing.module';

import { TodaysForecastPage } from './todays-forecast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodaysForecastPageRoutingModule
  ],
  declarations: [TodaysForecastPage]
})
export class TodaysForecastPageModule {}
