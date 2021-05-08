import { Component, OnInit } from '@angular/core';
import { WidgetOptionsProvider } from 'src/app/widgets/widgetOptionsProvider';

@Component({
  selector: 'app-vessel-fuel-main',
  templateUrl: './vessel-fuel-main.component.html',
  styleUrls: ['./vessel-fuel-main.component.css']
})
export class VesselFuelMainComponent implements OnInit {

  gaugeOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.gaugeOptions = WidgetOptionsProvider.GetGaugeOptions();
  }

}
