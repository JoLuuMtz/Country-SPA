import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';

import { CountryPageComponent } from './pages/country-page/country.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    CountryPageComponent,
    ByCapitalPageComponent,
    ByRegionPageComponent,
    ByCountryPageComponent,


  ],
  imports: [
    CommonModule,
    SharedModule,
    CountryRoutingModule,
    HttpClientModule // importamos el modulo de rutas hijas
  ],
  exports: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CountryRoutingModule,
    // exportamos el modulo de rutas hijas

  ]
})
export class CountryModule { }
