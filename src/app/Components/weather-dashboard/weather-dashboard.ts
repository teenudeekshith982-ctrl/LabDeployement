import { Component, OnInit, signal } from '@angular/core';
import { WeatherService } from '../../Services/WeatherService';
import { WeatherForecast } from '../../Models/WeatherForecast';



@Component({
  selector: 'app-weather-dashboard',
  imports: [],
  templateUrl: './weather-dashboard.html',
  styleUrl: './weather-dashboard.css',
})
export class WeatherDashboard implements OnInit {

  isLoading = signal(false);
  WeatherData = signal<WeatherForecast[]>([]);

  constructor(private Weatherservice: WeatherService){
    
  }


  ngOnInit(): void {
    this.isLoading.set(true);
    this.Weatherservice.getWeatherData().subscribe({
      next:(response:any) => {
        this.WeatherData.set(response);
        this.isLoading.set(false);
      },
      error:(error:any)=>{
        this.isLoading.set(false);
        console.log(error);
      }
    });
  }
}
