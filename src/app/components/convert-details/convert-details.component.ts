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
  }

}
