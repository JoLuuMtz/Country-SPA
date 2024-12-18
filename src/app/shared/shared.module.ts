import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageNoFoundComponent } from './pages/no-found/no-found.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryRoutingModule } from '../country/country-routing.module';




@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent,
    PageNoFoundComponent,
    SearchBoxComponent,
    CountryTableComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    CountryRoutingModule,
  ],
  exports
    : [
      HomePageComponent,
      AboutPageComponent,
      SidebarComponent,
      PageNoFoundComponent,
      SearchBoxComponent,
      CountryTableComponent
    ]
})
export class SharedModule { }
