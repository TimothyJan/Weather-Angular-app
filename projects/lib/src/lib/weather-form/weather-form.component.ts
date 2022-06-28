import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LibService } from '../lib.service';
import { HighlightDirective } from './highlight.directive';

@Component({
  standalone: true,
  selector: 'lib-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css'],
  imports: [ReactiveFormsModule, CommonModule, HighlightDirective],
})
export class WeatherFormComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  weatherData: any;
  locationDisplayed: string;
  isLoading = false;

  constructor(private formBuilder: FormBuilder, private libService: LibService) { }

  ngOnInit(): void {
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
  }

  sendToAPI(formValues){
    // update location displayed
    this.locationDisplayed = formValues.location;

    // Loading spinner
    this.isLoading=true;

    // Service location and send weather data to weather-details component
    this.libService.getWeather(formValues.location)
      .subscribe(data => {
        this.weatherData = data;
        console.log(this.weatherData);
        this.isLoading = false;
      });
  }
}
