import { Component, OnInit } from '@angular/core';
import { IGaugeOptions } from 'src/app/widgets/gaugeOptions';
import { WidgetOptionsProvider } from 'src/app/widgets/widgetOptionsProvider';

@Component({
  selector: 'app-vessel-fuel-statistics',
  templateUrl: './vessel-fuel-statistics.component.html',
  styleUrls: ['./vessel-fuel-statistics.component.css']
})
export class VesselFuelStatisticsComponent implements OnInit {

  gaugeOptions: IGaugeOptions;

  constructor() {
    this.gaugeOptions = WidgetOptionsProvider.GetGaugeOptions();
    this.gaugeOptions.color = 'green';
   }

  ngOnInit(): void {
  }

}
