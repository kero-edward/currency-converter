import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public api: ApiServiceService, private router: Router) { }

  eurToUsd() {
    this.api.fromCurrency = 'EUR';
    this.api.toCurrency = 'USD';

    if (window.location.pathname != '/details') {
      this.router.navigate(['/details']);
    }
  }

  eurToGbp() {
    this.api.fromCurrency = 'EUR';
    this.api.toCurrency = 'GBP';

    if (window.location.pathname != '/details') {
      this.router.navigate(['/details']);
    }
  }
}