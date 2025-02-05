import { NgModule } from '@angular/core';


import { Route, RouterModule, Routes } from '@angular/router';

import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { CountryPageComponent } from './pages/country-page/country.component';




const routes: Routes = [

  { path: 'by-capital', component: ByCapitalPageComponent },
  { path: 'by-region', component: ByRegionPageComponent },
  { path: 'by-country', component: ByCountryPageComponent },
  { path: 'info/:id', component: CountryPageComponent }//infoamcion del country


];

@NgModule({

  imports: [RouterModule.forChild(routes)],//rutas hijas del  modulo country
  exports: [RouterModule]

})
export class CountryRoutingModule { }

