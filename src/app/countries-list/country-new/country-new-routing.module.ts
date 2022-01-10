import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryNewPage } from './country-new.page';

const routes: Routes = [
  {
    path: '',
    component: CountryNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryNewPageRoutingModule {}
