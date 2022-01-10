import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { Country } from "src/app/models/country.model"
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private dbPath = '/countries';


  CountriesRef: AngularFirestoreCollection<Country>;
  private Country?: any;
  countrySubject = new Subject<any[]>();

  constructor(private db: AngularFirestore) {
    this.CountriesRef = db.collection(this.dbPath);
  }


  getAllCountries(): any {
    return this.CountriesRef.snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc: any) => {
          return ({ id: doc.payload.doc.id, ...doc.payload.doc.data() })
        })
      })
    );
  }

  saveNewCountry(country: Country): any {
    return new Observable(obs => {
      this.CountriesRef.add({ ...country }).then(() => {
        obs.next();
      })
    })
  }

  get(id: any): any {
    return new Observable(obs => {
      this.CountriesRef.doc(id).get().subscribe(res => {
        obs.next({ id: res.id, ...res.data() })
      })
    })
  }

  update(country: Country) {
    return new Observable(obs => {
      this.CountriesRef.doc(country.id).update(country);
      obs.next();
    })
  }

  delete(id: any) {
    this.db.doc(`countries/${id}`).delete();
  }


  emitCountrySubject() {
    this.countrySubject.next(this.Country.slice());
  }
 
  getCountryById(id: number) {
    let tmp;
    for (const country of this.Country) {
      if (country.id == id) {
        tmp = country;
      }
    }
    this.emitCountrySubject();
    return tmp;
  }
}
