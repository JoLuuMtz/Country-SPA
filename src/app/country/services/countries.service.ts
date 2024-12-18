
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country.interfaces';
import { catchError, map, Observable, of } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class CountryServices {

  private apiUrl = "https://restcountries.com/v3.1";

  public country: Country[] = [];


  constructor(private http: HttpClient) {

    console.log(" Inicio Services ");
    this.country = [...this.country]


  }


  // get country for code
  SearchCountryForCode(search: string): Observable<Country | null> {

    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${search}`)
      .pipe(
        map((country => country.length > 0 ? country[0] : null)),
        catchError(error => {
          console.log(error.message);

          return of(null);

        }),
      );


  }

  // get country optimized
  private SearchByType(search: string, type: 'region' | 'name' | 'capital'): Observable<Country[]> {
    if (search === '') {
      return of([]); // Si el término de búsqueda está vacío, devuelve un observable con un arreglo vacío
    }
    // Realiza la petición HTTP y devuelve un observable con el resultado
    return this.http.get<Country[]>(`${this.apiUrl}/${type}/${search}`).pipe(
      catchError(error => {
        console.error(`Error searching by ${type}:`, error.message);
        return of([]); // Devuelve un observable con un arreglo vacío en caso de error
      })// Simula una demora de 1 segundo
    );
  }

  // Métodos específicos que reutilizan `SearchByType`
  SearchByRegion(search: string): Observable<Country[]> {
    // obtiene el nombre y el tipo de busqueda
    return this.SearchByType(search, 'region');
  }

  SearchByCountry(search: string): Observable<Country[]> {
    return this.SearchByType(search, 'name');
  }

  SearchByCapital(search: string): Observable<Country[]> {
    return this.SearchByType(search, 'capital');
  }






}










