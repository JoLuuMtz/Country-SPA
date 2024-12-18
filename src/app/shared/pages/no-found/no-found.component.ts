import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-found',
  templateUrl: './no-found.component.html'

})
export class PageNoFoundComponent {
  constructor(private router: Router) { }
  @Input("MostrarSideBar2")
  public Mostrar: boolean = true;

  navegate() {
    this.router.navigate(['/country/by-capital']);

  }

}
