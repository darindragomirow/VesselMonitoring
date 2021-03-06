import { Component, OnInit } from '@angular/core';
import { WidgetOptionsProvider } from 'src/app/widgets/widgetOptionsProvider';

@Component({
  selector: 'app-vessel-engine-main',
  templateUrl: './vessel-engine-main.component.html',
  styleUrls: ['./vessel-engine-main.component.css']
})
export class VesselEngineMainComponent implements OnInit {

  gaugeOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.gaugeOptions = WidgetOptionsProvider.GetGaugeOptions();
  }
}
