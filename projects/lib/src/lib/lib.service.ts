import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibService {
  degreeForC:string = 'F';

  APIKey="d65c54c5da8ab0f389b2756d244d7202";
  //https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid=d65c54c5da8ab0f389b2756d244d7202&units=imperial

  constructor(private http: HttpClient) { }

  getWeather(location){
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + this.APIKey + '&units=imperial'
    );
  }

}
