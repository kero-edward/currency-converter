import {
  Component,
  SimpleChanges
} from '@angular/core';
import {
  ApiServiceService
} from 'src/app/services/api-service.service';

@Component({
  selector: 'app-convert-home',
  templateUrl: './convert-home.component.html',
  styleUrls: ['./convert-home.component.scss']
})
export class ConvertHomeComponent {

  constructor(public api: ApiServiceService) {
    this.api.hideDetailsBtn = false;
  }

  ngOnInit(): void {
    this.getCurrencies();
  }

  ngDoCheck() {
    if (this.api.amount == undefined) {
      this.api.validAmount = false;
    } else {
      this.api.validAmount = true;
    }
  }

  swap(selected1: any, selected2: any) {
    this.api.selected1 = selected2;
    this.api.selected2 = selected1;
  }

  getCurrencies() {
    this.api.getAllCurrencies().subscribe({
      next: (res) => {
        this.api.allCurrencies = Object.keys(res.symbols);
      }
    });
  }

  convertCurrencies() {
    // GET converted result with amount entered
    this.api.convertCurrency(this.api.selected2, this.api.selected1, this.api.amount).subscribe({
      next: (res) => {
        this.api.fromCurrency = res.query.from;
        this.api.toCurrency = res.query.to;
        this.api.amountEntered = res.query.amount;
        this.api.convertResult = res.result;
      }
    });

    // GET converted result with amount = 1
    this.api.convertOneToOne(this.api.selected2, this.api.selected1, 1).subscribe({
      next: (res) => {
        this.api.result = res.result;
      }
    });

    // GET converted result with the base currency, and 9 most popular currencies
    this.api.getMostPopularCurrencies(this.api.selected1).subscribe({
      next: (res) => {
        this.api.displayPopularCurrencies = res.rates;
      }
    });
  }
}
