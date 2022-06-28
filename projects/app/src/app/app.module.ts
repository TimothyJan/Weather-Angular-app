import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { WeatherFormComponent } from 'projects/lib/src/lib/weather-form/weather-form.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibService } from 'lib';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    WeatherFormComponent,
  ],
  providers: [LibService],
  bootstrap: [AppComponent]
})
export class AppModule { }
