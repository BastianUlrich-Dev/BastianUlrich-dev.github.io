import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-proyecto03',
  templateUrl: './proyecto03.component.html',
  styleUrls: ['./proyecto03.component.scss']
})
export class Proyecto03Component implements OnInit{
  
  city!:string;
  weatherData: any;
  constructor(private weatherService: WeatherService){}
  
  ngOnInit(): void {}

  getWeather(){
    this.weatherService.getWeather(this.city)
    .subscribe(data =>{
      this.weatherData=data;
      console.log(data);
      
    })
  }
}
