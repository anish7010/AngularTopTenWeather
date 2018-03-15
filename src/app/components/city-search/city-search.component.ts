import { Component, OnInit } from '@angular/core';
import { SearchCityService } from '../../services/search-city.service'

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {

  city : string;
  searchedCity = {};
  
  constructor(private searchCityService : SearchCityService) { }

  ngOnInit() {
  }

  getWeather(city : string) {
    //now we have the object with us
    this.searchCityService.getWeather(city).subscribe((res) =>
      this.searchedCity = res);
      
  }
}
