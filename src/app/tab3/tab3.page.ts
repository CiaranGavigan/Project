import { Component } from '@angular/core';
import { TodaysForecastPage } from '../todays-forecast/todays-forecast.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  tab3 = TodaysForecastPage;

  constructor() {}

}
