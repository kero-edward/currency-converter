import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseURL: string = 'https://api.apilayer.com/fixer/';
  apiKey: string = 'apikey=X0CcGHu4fMfPnbfCqsXyB9oP5uAfglcZ'
  popularCurrencies: string = 'USD,EUR,JPY,GBP,CNY,AUD,CAD,CHF,HKD'

  selected1 = 'EUR';
  selected2 = 'USD';
  amount: any;
  validAmount: boolean = false;
  allCurrencies: any = [];
  displayPopularCurrencies: any = [];
  displayPopularCurrenciesSymbol: any = [];
  displayPopularCurrenciesValue: any = [];
  fromCurrency!: string;
  ToCurrency!: string;
  amountEntered!: number;
  convertResult!: number;
  result!: number;

  constructor(private http: HttpClient) { }

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