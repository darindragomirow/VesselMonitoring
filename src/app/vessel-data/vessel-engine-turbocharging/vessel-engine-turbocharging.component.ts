import { Component, OnInit } from '@angular/core';
import { WidgetOptionsProvider } from 'src/app/widgets/widgetOptionsProvider';

@Component({
  selector: 'app-vessel-engine-turbocharging',
  templateUrl: './vessel-engine-turbocharging.component.html',
  styleUrls: ['./vessel-engine-turbocharging.component.css']
})
export class VesselEngineTurbochargingComponent implements OnInit {

  gaugeOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.gaugeOptions = WidgetOptionsProvider.GetGaugeOptions();
  }

}
