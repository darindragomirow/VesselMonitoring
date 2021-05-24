import { Component, OnInit } from '@angular/core';
import { WidgetOptionsProvider } from 'src/app/widgets/widgetOptionsProvider';

@Component({
  selector: 'app-vessel-cooling',
  templateUrl: './vessel-cooling.component.html',
  styleUrls: ['./vessel-cooling.component.css']
})
export class VesselCoolingComponent implements OnInit {

  gaugeOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.gaugeOptions = WidgetOptionsProvider.GetGaugeOptions();
  }

}
