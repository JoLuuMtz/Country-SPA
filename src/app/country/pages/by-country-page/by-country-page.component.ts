import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountryServices } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent {

  constructor(private country: CountryServices) { }
  public resultado: boolean = false;
  public countries: Country[] = [];


  SearchCountry(search: string): void {

    this.country.SearchByCountry(search).subscribe((countries) => {

      this.countries = countries;
      countries.length === 0 ? this.resultado = true : this.resultado = false;
      if (search === '') this.resultado = false;

    });

  }
}
