import { Component, OnInit } from '@angular/core';
import { WidgetOptionsProvider } from 'src/app/widgets/widgetOptionsProvider';

@Component({
  selector: 'app-vessel-engine-cylinders',
  templateUrl: './vessel-engine-cylinders.component.html',
  styleUrls: ['./vessel-engine-cylinders.component.css']
})
export class VesselEngineCylindersComponent implements OnInit {
  cylinderPressureOptions: any;
  temperatureChartId = 'temperature';
  temperatureChartTitle = 'Average temperature';
  pressureChartId = 'pressure';
  pressureChartTitle = 'Average pressure';

  constructor() { }

  ngOnInit(): void {
    this.cylinderPressureOptions = WidgetOptionsProvider.GetGaugeOptions();
  }
}
