import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConvertHomeComponent } from './components/convert-home/convert-home.component';
import { ConvertDetailsComponent } from './components/convert-details/convert-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ConvertHomeComponent,
    ConvertDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
