import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.page.html',
  styleUrls: ['./country.page.scss'],
})
export class CountryPage implements OnInit {
  modif!: boolean;
  country: any = null;

  constructor(
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private Country: CountryService,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.modif = false;
    const id = this.route.snapshot.paramMap.get('id');
    this.Country.get(id).subscribe((value: any) => {
      this.country = value;
    });
  }

  async setModif() {
    if (!this.modif) {
      const alert = await this.alertCtrl.create({
        header: 'Etes-vous sur de vouloir modifier ?',
        subHeader: 'Vous rendrez possible la modification',
        buttons: [
          {
            text: 'Annuler',
            role: 'Cancel'
          }, {
            text: 'Confirmer',
            handler: () => { this.modif = !this.modif }
          }
        ]
      });

      await alert.present();
    } else {
      this.modif = !this.modif;
    }
  }

  async presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Vos modifications sont enregistrées',
      duration: 2000
    });
    (await toast).present();
  }

  onModif() {
    this.Country.update(this.country).subscribe(() => {
      this.presentToast();
      this.modif = false;
    });
  }

  async onDelete(id: any) {

    const alert = await this.alertCtrl.create({
      header: 'Etes-vous sur de vouloir supprimer ?',
      subHeader: 'Le pays sera supprimé définitivement',
      buttons: [
        {
          text: 'Annuler',
          role: 'Cancel'
        }, {
          text: 'Confirmer',
          handler: () => {
            this.Country.delete(id);
            this.router.navigate(['/tabs/countries'])
          }
        }
      ]
    });

    await alert.present();


  }

}
