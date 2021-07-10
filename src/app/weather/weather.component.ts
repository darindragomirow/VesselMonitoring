import { Component, OnInit } from '@angular/core';
import { WidgetOptionsProvider } from '../widgets/widgetOptionsProvider';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  gaugeOptions: any;

  constructor() {
    this.gaugeOptions = {
      width: '300px',
      height: '300px'
    };
   }

  ngOnInit(): void {}
}
