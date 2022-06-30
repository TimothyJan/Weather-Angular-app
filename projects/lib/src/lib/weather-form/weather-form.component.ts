import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { HighlightDirective } from '../highlight.directive';
import { LibService } from './lib.service';

@Component({
  standalone: true,
  selector: 'lib-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css'],
  imports: [ReactiveFormsModule, CommonModule, HighlightDirective, LoadingSpinnerComponent],
})

export class WeatherFormComponent implements OnInit {
  public weatherSearchForm: FormGroup;
  weatherData: any;
  isLoading = false;
  allDegreeScales = ['Fahrenheit', 'Celsius', 'Kelvin'];
  degreeScale:string = null;
  locationDisplayed:string = null;
  errorMessage:string = "ERROR";

  constructor(private formBuilder: FormBuilder, private libService: LibService) { }

  ngOnInit(): void {
    this.weatherSearchForm = new FormGroup({
      'location': new FormControl(null, [Validators.required]),
      'degreeScale': new FormControl(null, [Validators.required]),
    });
  }

  sendToAPI(formValues){
    console.log(formValues);

    // for HTML Display
    this.locationDisplayed = formValues.location;
    this.degreeScale = formValues.degreeScale;

    // for loading spinner
    this.isLoading=true;

    // Service location and send weather data to weather-details component
    this.libService.getWeather(formValues.location, formValues.degreeScale)
      .subscribe(data => {
        this.weatherData = data;
        console.log(this.weatherData);

        if(this.errorMessage!==null){
          this.errorMessage = null;
        }

        // Stop loading spinner
        this.isLoading = false;
      },
      error => {
        this.errorMessage = "Location not found! Please enter a valid location!"
        this.isLoading = false;
      }

      );
  }
}
