//@ts-check
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { weatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey='d1c61c950d8056e48c3fcc2d1c51f1b9';
  constructor(private http: HttpClient) { }

  getWeather(city:string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&appid=${this.apiKey}&units=metric`);
  }
}
