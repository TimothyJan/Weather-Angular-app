import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibService {
  fahrenheitOrCelsius:string = "F";

  APIKey="d65c54c5da8ab0f389b2756d244d7202";
  //https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid=d65c54c5da8ab0f389b2756d244d7202&units=imperial
  //https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid=d65c54c5da8ab0f389b2756d244d7202&units=metric

  constructor(private http: HttpClient) { }

  getWeather(location){
    console.log(this.fahrenheitOrCelsius);
    if (this.fahrenheitOrCelsius === "F"){
      return this.http.get(
        'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + this.APIKey + '&units=imperial'
      )} else{
      return this.http.get(
        'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + this.APIKey + '&units=metric'
      )}
  }

}
