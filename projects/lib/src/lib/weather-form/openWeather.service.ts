import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  // Add as environment variable
  APIKey="d65c54c5da8ab0f389b2756d244d7202";
  //https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid=d65c54c5da8ab0f389b2756d244d7202&units=imperial
  //https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid=d65c54c5da8ab0f389b2756d244d7202&units=metric

  constructor(private http: HttpClient) { }

  getWeather(location, degreeScale){
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + this.APIKey;
    switch (degreeScale){
      case 'Fahrenheit':{
        return this.http.get(url + '&units=imperial');
      }
      case 'Celsius':{
        return this.http.get(url + '&units=metric');
      }
      case 'Kelvin':{
        return this.http.get(url);
      }
      default:{
        return this.http.get(url + '&units=imperial');
      }
    }
  }

}
