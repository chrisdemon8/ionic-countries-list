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

export class CountryNewPageModule implements OnInit{
  
  public country!: Country;

  constructor(
    private Country: CountryService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.country = new Country();
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Nouveau pays enregistré',
      duration: 2000
    });
    (await toast).present().then(() => {
      setTimeout(() => {
        this.router.navigate(['/tabs/countries']);
      }, 2000);
    });
  }


  add() {
    this.Country.saveNewCountry(this.country).subscribe(() => {
      this.country = new Country();
      this.presentToast();
    })
  }

}
 
