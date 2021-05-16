import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TomorrowsForecastPage } from './tomorrows-forecast.page';

const routes: Routes = [
  {
    path: '',
    component: TomorrowsForecastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TomorrowsForecastPageRoutingModule {}
