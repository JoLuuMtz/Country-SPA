import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountryServices } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.css'
})
export class ByCountryPageComponent implements OnInit {

  public resultado: boolean = false;
  public countries: Country[] = [];
  public initialValueCountry: string = '';

  constructor(private country: CountryServices) { }


  ngOnInit(): void {

    // obtiene los datos de la busqueda anterior guardada en cachStore
    this.countries = this.country.cachStore.byCountry.countries;
    // le asigna el valor de la busqueda anterior guardada en cachStore
    this.initialValueCountry = this.country.cachStore.byCountry.term;

  }







  SearchCountry(search: string): void {

    this.country.SearchByCountry(search).subscribe((countries) => {

      this.countries = countries;
      countries.length === 0 ? this.resultado = true : this.resultado = false;
      if (search === '') this.resultado = false;

    });

  }
}
