import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  // obtiene el valor de la propiedad de la referencia al elemento del DOM
  @ViewChild('searchInput')
  xd!: ElementRef<HTMLInputElement>;

  SearchCountry() {
    console.log(this.xd.nativeElement.value);
    this.xd.nativeElement.value = '';

  }



}
