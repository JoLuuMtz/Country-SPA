import { Component, Input, input, OnInit } from '@angular/core';
import { CountryServices } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent implements OnInit {


  public countries: Country[] = []; // array que obtiene los datos de la api

  public resultado: boolean = false;
  public initialValue: string = '';

  constructor(private country: CountryServices) { }


  ngOnInit(): void {

    this.countries = this.country.cachStore.byCapital.countries;
   // le asigna el valor de la busqueda anterior guardada en cachStore
    this.initialValue = this.country.cachStore.byCapital.term;

  }




  SearchCapital(search: string): void {

    this.country.SearchByCapital(search).subscribe((countries) => {
      console.log(countries);
      this.countries = countries;
      countries.length === 0 ? this.resultado = true : this.resultado = false;
      if (search === '') this.resultado = false;
    });






  }


}

