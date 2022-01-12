import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/service/country.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.page.html',
  styleUrls: ['./countries-list.page.scss'],
})
export class CountriesListPage implements OnInit {
 
  countries!: any;
  constructor(private Country: CountryService) { }

  ngOnInit(): void {
    this.Country.getAllCountries().subscribe((data: any) => {
      this.countries = data; 
    })
  }


}
