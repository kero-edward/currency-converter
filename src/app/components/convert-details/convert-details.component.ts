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

@Component({
  selector: 'app-convert-details',
  templateUrl: './convert-details.component.html',
  styleUrls: ['./convert-details.component.scss']
})
export class ConvertDetailsComponent {

  chartData: ChartDataset[] = [{
    label: '$ in millions',
    data: [1551, 1688, 1800, 1895, 2124, 2124],
    pointHitRadius: 15, // expands the hover 'detection' area
    pointHoverRadius: 8, // grows the point when hovered
    pointRadius: 2,
    borderColor: '#2D2F33', // main line color aka $midnight-medium from @riapacheco/yutes/seasonal.scss
    pointBackgroundColor: '#2D2F33',
    pointHoverBackgroundColor: '#2D2F33',
    borderWidth: 2, // main line width
    hoverBorderWidth: 0, // borders on points
    pointBorderWidth: 0, // removes POINT borders
    tension: 0.3, // makes line more squiggly
  }];

  chartLabels: string[] = ['2016 Revenue', '2017 Revenue', '2018 Revenue', '2019 Revenue', '2020 Revenue', '2021 Revenue'];

  chartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      xAxis: {
        display: false,
        grid: {
          // drawBorder: false // removes random border at bottom
        }
      },
      yAxis: {
        display: false
      }
    },
    plugins: {
      legend: {
        display: false
      },

      tooltip: {
        // ⤵️ tooltip main styles
        backgroundColor: 'white',
        displayColors: false, // removes unnecessary legend
        padding: 10,

        // ⤵️ title
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

  constructor(public api: ApiServiceService) {
    this.api.hideDetailsBtn = true;
  }

  ngOnInit(): void {
    // this.getCurrencies();
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
