import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountriesListPage } from './countries-list.page';

const routes: Routes = [
  {
    path: '',
    component: CountriesListPage
  },
  {
    path: 'new',
    loadChildren: () => import('./country-new/country-new.module').then( m => m.CountryNewPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./country/country.module').then( m => m.CountryPageModule)
  }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountriesListPageRoutingModule {}
