import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CitySearchComponent } from './components/city-search/city-search.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchCityService } from './services/search-city.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CitySearchComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule  
  ],
  providers: [
    SearchCityService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
