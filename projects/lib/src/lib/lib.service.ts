import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibService {

  APIKey="d65c54c5da8ab0f389b2756d244d7202";
  //https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid=d65c54c5da8ab0f389b2756d244d7202&units=imperial
  //https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&appid=d65c54c5da8ab0f389b2756d244d7202&units=metric

  constructor(private http: HttpClient) { }

  getWeather(location, degreeScale){
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=' + this.APIKey;
    switch (degreeScale){
      case 'Fahrenheit':{
        console.log('F');
        return this.http.get(url + '&units=imperial');
      }
      case 'Celsius':{
        console.log('C');
        return this.http.get(url + '&units=metric');
      }
      case 'Kelvin':{
        console.log('K');
        return this.http.get(url);
      }
      default:{
        console.log('D');
        return this.http.get(url + '&units=imperial');
      }
    }
  }

}
