import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountryServices } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

  public resultado: boolean = false;
  public regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public regionsSelected: string = '';
  public countries: Country[] = [];

  constructor(private countryService: CountryServices) { }


  // busca los paises
  SearchRegion(search: string): void {
    // le asignamos el valor de la region seleccionada
    this.regionsSelected = search;
    // llamamos al servicio para que nos devuelva los paises por region
    this.countryService.SearchByRegion(search).subscribe((countries) => {
      this.countries = countries;

    });
  }




}
