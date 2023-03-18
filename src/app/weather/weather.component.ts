import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() city: string = '';
  @Input() country: string = '';
  weatherData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getWeatherData();
  }

  getWeatherData() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=11c7b470c61ca14dd4028c93ee72f45a&units=metric`;

    this.http.get(url)
      .subscribe(data => {
        this.weatherData = data;
      });
  }
}
