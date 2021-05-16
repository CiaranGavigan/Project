import { Component } from '@angular/core';

import {SettingsPage} from '../settings/settings.page';
import { TodaysForecastPage } from '../todays-forecast/todays-forecast.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

    tab3 = SettingsPage;
    tab1 = TodaysForecastPage;

  constructor() {}

}
