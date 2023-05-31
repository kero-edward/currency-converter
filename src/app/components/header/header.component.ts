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
    this.api.selected1 = 'EUR';
    this.api.selected2 = 'USD';
    console.log('this.selected1', this.api.selected1);
    console.log('this.selected2', this.api.selected2);

    if (window.location.pathname != '/details') {
      this.router.navigate(['/details']);
    }
  }

  eurToGbp() {
    this.api.selected1 = 'EUR';
    this.api.selected2 = 'GBP';
    console.log('this.selected1', this.api.selected1);
    console.log('this.selected2', this.api.selected2);

    if (window.location.pathname != '/details') {
      this.router.navigate(['/details']);
    }
  }
}