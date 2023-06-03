import {
  Injectable
} from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {
  currentDate: any;
  pastYearDate: any;
  lastDayArr: any = [];
  year: any;
  month: any;
  historicalRates: any = [];
  allRates: any;

  constructor(public api: ApiServiceService) {
    this.currentDate = new Date().toJSON().slice(0, 10);
    this.pastYearDate = this.getPastYear();
    this.year = parseInt(this.pastYearDate) + 1;
    this.month = new Date().getMonth();

    for (let i = 0; i <= this.month - 1; i++) {
      var lastDayOfMonth = new Date(this.year, i + 1, 1);
      this.lastDayArr.push(lastDayOfMonth.toJSON().slice(0, 10));

      if (i == this.month - 1 && this.year == (parseInt(this.pastYearDate) + 1)) {
        this.year = parseInt(this.pastYearDate);

        for (let k = this.month + 2; k <= 13; k++) {
          var lastDayOfMonth = new Date(this.year, k - 1, 1);
          this.lastDayArr.push(lastDayOfMonth.toJSON().slice(0, 10));
        }
        break;
      }
    }
    this.getRate();
  }

  getRate() {
    this.lastDayArr.forEach((lastDay: string) => {
      this.api.getHistoricalData(lastDay, this.api.selected1, this.api.selected2).subscribe({
        next: (res) => {
          this.allRates = res.rates;
          this.historicalRates.push(Object.values(this.allRates)[0]);
          console.log(this.historicalRates);
        }
      });
    });
  }

  getPastYear() {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 1);
    return date.toJSON().slice(0, 10);
  }
}
