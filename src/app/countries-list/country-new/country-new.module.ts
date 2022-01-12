import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, ToastController } from '@ionic/angular';

import { CountryNewPageRoutingModule } from './country-new-routing.module';

import { CountryNewPage } from './country-new.page';
import { Country } from 'src/app/models/country.model';
import { CountryService } from 'src/app/service/country.service';
import { Router } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryNewPageRoutingModule
  ],
  declarations: [CountryNewPage]
})

export class CountryNewPageModule {


}

