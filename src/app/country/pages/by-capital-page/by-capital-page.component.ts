import { Component } from '@angular/core';
import { CountryServices } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';



@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  public resultado: boolean = false;
  constructor(private country: CountryServices) { }

  public countries: Country[] = []; // array que obtiene los datos de la api


  SearchCapital(search: string): void {

    this.country.SearchByCapital(search).subscribe((countries) => {
      console.log(countries);
      this.countries = countries;
      countries.length === 0 ? this.resultado = true : this.resultado = false;
      if (search === '') this.resultado = false;
    });






  }


}

