import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchResultComponent } from './components/search-result.component';

import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ ApiService, BaseRequestOptions ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
