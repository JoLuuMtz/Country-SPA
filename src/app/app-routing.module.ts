import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { PageNoFoundComponent } from './shared/pages/no-found/no-found.component';
import { CountryPageComponent } from './country/pages/country-page/country.component';


const routes: Routes = [


  { path: '', redirectTo: '/country/by-capital', pathMatch: 'full' },

  // declara la ruta de la pagina de informacion del pais y las rutas hijas mediante lazy load
  {
    path: 'country', loadChildren: () => import('./country/country.module')
      .then(modulo => modulo.CountryModule)// carga el modulo country cuando se trabaja con modulos 
  },

  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'notfound', component: PageNoFoundComponent },// componente para la pagina 404/ ruta por default de country
  // lazy load de las rutas hijas del modulo  country
  { path: '**', redirectTo: '/notfound' }, // Wildcard route for a 404 page


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
