import {
  Component
} from '@angular/core';
import {
  ApiServiceService
} from 'src/app/services/api-service.service';
import {
  ChartDataset,
  ChartOptions
} from 'chart.js';
import { ChartServiceService } from 'src/app/services/chart-service.service';

@Component({
  selector: 'app-convert-details',
  templateUrl: './convert-details.component.html',
  styleUrls: ['./convert-details.component.scss']
})
export class ConvertDetailsComponent {

  chartData: ChartDataset[] = [{
    data: this.chartSevice.historicalRates,
    pointHitRadius: 15,
    pointHoverRadius: 7,
    pointRadius: 2,
    borderColor: '#2D2F33',
    pointBackgroundColor: '#2D2F33',
    pointHoverBackgroundColor: '#2D2F33',
    borderWidth: 2,
    hoverBorderWidth: 0,
    pointBorderWidth: 0,
  }];

  chartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,

    scales: {},

    plugins: {
      legend: {
        display: false
      },

      tooltip: {
        backgroundColor: 'white',
        displayColors: false,
        padding: 10,

        titleColor: '#2D2F33',
        titleFont: {
          size: 18
        },

        bodyColor: '#2D2F33',
        bodyFont: {
          size: 13
        }
      }
    }
  };

  constructor(public api: ApiServiceService, public chartSevice: ChartServiceService) {
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
            this.api.selectedFullName = value;
          }
        });
      }
    });

    this.chartSevice.getRate();
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

    this.chartSevice.getRate();
  }

  ngDoCheck() {
    if (this.api.amount == undefined) {
      this.api.validAmount = false;
    } else {
      this.api.validAmount = true;
    }
  }
}