import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodaysForecastPage } from './todays-forecast.page';

const routes: Routes = [
  {
    path: '',
    component: TodaysForecastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodaysForecastPageRoutingModule {}
