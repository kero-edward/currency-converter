import {
  Component
} from '@angular/core';
import {
  ApiServiceService
} from 'src/app/services/api-service.service';

@Component({
  selector: 'app-convert-details',
  templateUrl: './convert-details.component.html',
  styleUrls: ['./convert-details.component.scss']
})
export class ConvertDetailsComponent {

  constructor(public api: ApiServiceService) {
    this.api.hideDetailsBtn = true;
  }

  ngOnInit(): void {
    this.getCurrencies();
  }

  getCurrencies() {
    this.api.getAllCurrencies().subscribe({
      next: (res) => {
        this.api.allCurrencies = Object.keys(res.symbols);
        Object.entries(res.symbols).forEach(([key, value]) => {
          if (key == this.api.selected1) {
            console.log(`${key}: ${value}`);
            this.api.selectedFullName = value;
          }
        });
      }
    });
  }

  getObjectValue(obj: any, key: any) {
    return Object.values(obj).find((value: any) => obj[value] === key);
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
  }
}
