import { Component, OnInit } from '@angular/core';
import { WidgetOptionsProvider } from 'src/app/widgets/widgetOptionsProvider';

@Component({
  selector: 'app-vessel-engine-main',
  templateUrl: './vessel-engine-main.component.html',
  styleUrls: ['./vessel-engine-main.component.css']
})
export class VesselEngineMainComponent implements OnInit {

  engineStressOptions: any;

  constructor() { }

  ngOnInit(): void {
    this.engineStressOptions = WidgetOptionsProvider.GetGaugeOptions();
  }
}
