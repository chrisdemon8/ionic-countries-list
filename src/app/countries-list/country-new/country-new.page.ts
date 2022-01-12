import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Country } from 'src/app/models/country.model';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-country-new',
  templateUrl: './country-new.page.html',
  styleUrls: ['./country-new.page.scss'],
})
export class CountryNewPage implements OnInit {


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
