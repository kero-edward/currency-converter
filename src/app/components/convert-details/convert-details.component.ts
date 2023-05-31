import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-convert-details',
  templateUrl: './convert-details.component.html',
  styleUrls: ['./convert-details.component.scss']
})
export class ConvertDetailsComponent {

  constructor(public api: ApiServiceService) {
    console.log('fromCurrency', this.api.fromCurrency);
    console.log('ToCurrency', this.api.ToCurrency);
    console.log('amountEntered', this.api.amountEntered);
    console.log('result', this.api.result);
    console.log('convertResult', this.api.convertResult);

    console.log('selected1', this.api.selected1);
    console.log('selected2', this.api.selected2);

    // this.getCurrencies();
  }

  getCurrencies() {
    this.api.getAllCurrencies().subscribe({
      next: (res) => {
        this.api.allCurrencies = res.symbols;
        // this.api.detailsBase = Object.values(this.api.allCurrencies).find((key: any) => this.api.allCurrencies[key] == this.api.selected1);
        // retrun Object.keys(obj).find(key => obj[key] === value);
        console.log(this.getObjectValue(this.api.allCurrencies, this.api.selected1));
        console.log('work...');
      }
    });
  }

  getObjectValue(obj: any, key: any) {
    return Object.values(obj).find((value: any) => obj[value] === key);
  }

}
