import { Component, OnInit } from '@angular/core';
import { CountryServices } from '../../services/countries.service';
import { Region, Country } from '../../interfaces';

//  una variable que contiene los tipos de regiones
// type es un tipo de dato que se usa para definir un tipo de dato personalizado



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})

export class ByRegionPageComponent {


  /*opciones para el select*/
  // public resultado: boolean = false;

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']; // lista de botones
  public regionsSelected: string = ''; // el que recibe la region seleccionada
  public countries: Country[] = []; // es el que recibe los datos de la api




  constructor(private countryService: CountryServices) {



  }

  ngOnInit(): void {

    this.regionsSelected = this.countryService.cachStore.byRegion.region;
    this.countries = this.countryService.cachStore.byRegion.countries;

    // this.getData();

    // this.SaveData();

  }


  // getData(): void {
  //   // obtener data local storage
  //   const data = localStorage.getItem('byRegion');

  //   if (data != null) {
  //     // cambiamos de json a objeto js con JSON.parse

  //     const cacheData = JSON.parse(data);
  //     this.regionsSelected = cacheData.region;
  //     this.countries = cacheData.countries;
  //   }


  // }

  // SaveData(): void {

  //   // objeto que contiene la region y los paises
  //   const cacheData = this.countryService.cachStore.byRegion;

  //   let dataRegions = {
  //     region: cacheData.region || this.regionsSelected,
  //     countries: cacheData.countries || this.countries
  //   };

  //   if ((this.regionsSelected !== '') && (this.countries.length === 0)) {
  //     console.log('no hay datos');
  //     return; // si no hay datos no hace nada
  //   }

  //   // guardamos los datos en el localstorage
  //   localStorage.setItem('byRegion', JSON.stringify(dataRegions));


  // }

  // busca los paises
  SearchRegion(search: Region): void {
    // le asignamos el valor de la region seleccionada
    this.regionsSelected = search;

    // llamamos al servicio para que nos devuelva los paises por region
    this.countryService.SearchByRegion(search).subscribe((countries) => {
      this.countries = countries;
    });
  }




}
