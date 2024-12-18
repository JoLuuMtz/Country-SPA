import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountryServices } from '../../services/countries.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';



@Component({
  selector: 'country-page',
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryPageComponent implements OnInit {


  public country? : Country;// array que obtiene los datos de la api

  // inyeccion de dependencias servicios y el servicio de parametros de las rutas


  constructor(private activatedRoute: ActivatedRoute,
    private countryService: CountryServices,
    private Router: Router) { }



  // lo que se ejecutara cuando inicielice el componente
  ngOnInit(): void {
    /*factorizado con switchMap para multiples subscribes*/

    this.activatedRoute.params.pipe(// revise un observable y devuelva otro observable con switchMap
      switchMap(code => this.countryService.SearchCountryForCode(code['id']))//obtiene el parametro de la url y lo asigna a {code}
      // el id es el nombre del parametros que le dimos a la ruta en el archivo de rutas
    ).subscribe(countryResp => {
      console.log(countryResp);

      if (!countryResp) this.Router.navigateByUrl('/notfound');
      // asigna el resultado de la api a la variable country si no hay resultado redirige a la pagina de notfound
      this.country = countryResp ? this.country = countryResp :  this.country= undefined ;
    }
    );



    /* Sin factorizar */
    //obtiene el id de la ruta
    // this.activatedRoute.params.subscribe(code => {//obtiene el parametro de la url y lo asigna a {code}
    //   console.log(code);// imprime el parametro de la url
    //   this.countryService.SearchCountryForCode(code['id'])// ejecuta el metodo del servicio y le pasa el parametro {code}
    //     .subscribe((countries) => {
    //       console.log(countries);// imprime el resultado de la api
    //     });

    // })






  }









}

















