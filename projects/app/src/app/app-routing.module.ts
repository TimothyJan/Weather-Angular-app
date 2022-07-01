import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'projects/lib/src/lib/header/header.component';
import { WeatherFormComponent } from 'projects/lib/src/lib/weather-form/weather-form.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
