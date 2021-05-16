import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavController, NavParams } from '@ionic/angular';

import { SettingsPageRoutingModule } from './settings-routing.module';

import { SettingsPage } from './settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPageRoutingModule
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {
  city:string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage:Storage){
      this.storage.get('location').then((val)=>{
        if(val != null){
          let location = JSON.parse(val);
          this.city = location.city;
        }
        else{
          this.city = 'Dublin';
        }
        
      });
    }
}
