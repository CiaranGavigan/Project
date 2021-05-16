import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 

  constructor( private httpClient: HttpClient) { 
   
   
  }

  getWeatherData():Observable<any>{

 return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=dublin&appid=5ff7057261bb529bc82714f616ec6bd1' );
}
}
