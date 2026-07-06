import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class WeatherService{
    
    constructor(private http:HttpClient){

    }

    getWeatherData(){
        return this.http.get("https://sampleapi20260706g3-bvdacte9b0dvhudv.canadacentral-01.azurewebsites.net/Weatherforecast");
    }
}