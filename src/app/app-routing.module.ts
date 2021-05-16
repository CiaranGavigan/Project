import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tomorrows-forecast',
    loadChildren: () => import('./tomorrows-forecast/tomorrows-forecast.module').then( m => m.TomorrowsForecastPageModule)
  },
  {
    path: 'four-day-forecast',
    loadChildren: () => import('./four-day-forecast/four-day-forecast.module').then( m => m.FourDayForecastPageModule)
  },
  {
    path: 'seven-day-forecast',
    loadChildren: () => import('./seven-day-forecast/seven-day-forecast.module').then( m => m.SevenDayForecastPageModule)
  },
  {
    path: 'todays-forecast',
    loadChildren: () => import('./todays-forecast/todays-forecast.module').then( m => m.TodaysForecastPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
