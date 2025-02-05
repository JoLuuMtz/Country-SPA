
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country, CacheStore } from '../interfaces';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Region } from '../interfaces/regions.interface';







@Injectable({ providedIn: 'root' })

export class CountryServices {

  private apiUrl = "https://restcountries.com/v3.1";

  public country: Country[] = [];

  // objeto que mantiene la persistencia de los datos

  public cachStore: CacheStore = {
    byCountry: { term: '', countries: [] },
    byCapital: { term: '', countries: [] },
    byRegion: { region: '', countries: [] },
  }

  constructor(private http: HttpClient) {

    console.log(" Inicio Services ");


    this.getDataLocalStorage();

  }

  private SaveDataLocalStorage() {

    // guarda el objeto que tiene los paises en el local storage
    localStorage.setItem('Country', JSON.stringify(this.cachStore));

  }
  private getDataLocalStorage() {
    if (!localStorage.getItem('Country')) return; // si no hay datos no hace nada

    // le asigna los datos del local storage al objeto cachStore

    this.cachStore = JSON.parse(localStorage.getItem('Country')!);// ! para que no de error de null ya que no viene nada en null ni undefined
  }


  // get country for code
  SearchCountryForCode(search: string): Observable<Country | null> {
    // Realiza la petición HTTP y devuelve un observable con el resultado
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${search}`)
      .pipe(
        map((country => country.length > 0 ? country[0] : null)),
        catchError(error => {
          console.log(error.message); // si ocurre un error retorna null
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
  SearchByRegion(search: Region): Observable<Country[]> {
    // obtiene el nombre y el tipo de busqueda
    return this.SearchByType(search, 'region').pipe(
      tap((countries) => {
        this.cachStore.byRegion = { region: search, countries: countries };
      }),
      tap(() => this.SaveDataLocalStorage()) // guarda los datos en el local storage
    );
  }

  SearchByCountry(search: string): Observable<Country[]> {
    return this.SearchByType(search, 'name').pipe(

      tap((countries) => {
        this.cachStore.byCountry = { term: search, countries: countries };
      }),
      tap(() => this.SaveDataLocalStorage())// guarda los datos en el local storage
    );
  }

  SearchByCapital(search: string): Observable<Country[]> {
    return this.SearchByType(search, 'capital').pipe(
      tap((countries) => {
        this.cachStore.byCapital = { term: search, countries: countries };
      }),
      tap(() => this.SaveDataLocalStorage())// guarda los datos en el local storage
    );
  }






}










