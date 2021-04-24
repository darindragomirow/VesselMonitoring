import { Component, OnInit } from '@angular/core';
import { WidgetOptionsProvider } from '../widgets/widgetOptionsProvider';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  humidityOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.humidityOptions = WidgetOptionsProvider.GetGaugeOptions();
  }
}
