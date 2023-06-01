import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseURL: string = 'https://api.apilayer.com/fixer/';
  apiKey: string = 'apikey=DaMxKDk584ftqgA5EHDSBnnnsAlTQ534'
  popularCurrencies: string = 'USD,EUR,JPY,GBP,CNY,AUD,CAD,CHF,HKD'

  selected1: string = 'EUR';
  selected2: string = 'USD';
  selectedFullName: any;
  amount: any;
  validAmount: boolean = false;
  allCurrencies: any;
  displayPopularCurrencies: any = [];
  displayPopularCurrenciesSymbol: any = [];
  displayPopularCurrenciesValue: any = [];
  fromCurrency!: string;
  toCurrency!: string;
  detailsBase!: any;
  amountEntered!: number;
  convertResult!: number;
  result!: number;
  hideDetailsBtn: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    console.log();

  }

  getAllCurrencies(): Observable<any> {
    return this.http.get(`${this.baseURL}symbols?${this.apiKey}`);
  }

  convertCurrency(convertTo: string, convertFrom: string, amount: number): Observable<any> {
    return this.http.get(`${this.baseURL}convert?to=${convertTo}&from=${convertFrom}&amount=${amount}&${this.apiKey}`);
  }

  convertOneToOne(convertTo: string, convertFrom: string, amount: number): Observable<any> {
    return this.http.get(`${this.baseURL}convert?to=${convertTo}&from=${convertFrom}&amount=${amount}&${this.apiKey}`);
  }

  getMostPopularCurrencies(fromCurrency: string): Observable<any> {
    return this.http.get(`${this.baseURL}latest?base=${fromCurrency}&symbols=${this.popularCurrencies}&${this.apiKey}`);
  }
}