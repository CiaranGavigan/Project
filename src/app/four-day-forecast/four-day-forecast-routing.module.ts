import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FourDayForecastPage } from './four-day-forecast.page';

const routes: Routes = [
  {
    path: '',
    component: FourDayForecastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FourDayForecastPageRoutingModule {}
