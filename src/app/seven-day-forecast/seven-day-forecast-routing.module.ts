import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SevenDayForecastPage } from './seven-day-forecast.page';

const routes: Routes = [
  {
    path: '',
    component: SevenDayForecastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SevenDayForecastPageRoutingModule {}
