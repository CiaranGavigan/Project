import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service'

@Component({
  selector: 'app-todays-forecast',
  templateUrl: './todays-forecast.page.html',
  styleUrls: ['./todays-forecast.page.scss'],
})
export class TodaysForecastPage implements OnInit {
WeatherData:any = [];
DetailedWeatherData:any = [];
Cooridnates:any = [];
  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    this.weatherService.getWeatherData().subscribe(
      (data)=>{
       
        this.WeatherData = data.weather ;
     
        console.log(this.WeatherData);
        
       
      }
    );

    this.weatherService.getWeatherData().subscribe(
      (data)=>{
        this.DetailedWeatherData = data.main;
       console.log(this.DetailedWeatherData);
      }
    );
    this.weatherService.getWeatherData().subscribe(
      (data)=>{
        this.Cooridnates = data.main;
       console.log(this.Cooridnates);
      }
    );


    
  }

}
