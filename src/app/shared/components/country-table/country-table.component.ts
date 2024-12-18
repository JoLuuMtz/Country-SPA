import { Component, Input} from '@angular/core';
import { Country } from '../../../country/interfaces/country.interfaces';

@Component({
  selector: 'shared-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']

})
export class CountryTableComponent {

  @Input('countries-table')
    public countries: Country[] = [];
}
