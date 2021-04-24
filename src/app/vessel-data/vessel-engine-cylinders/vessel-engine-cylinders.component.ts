import { Component, OnInit } from '@angular/core';
import { WidgetOptionsProvider } from 'src/app/widgets/widgetOptionsProvider';

@Component({
  selector: 'app-vessel-engine-cylinders',
  templateUrl: './vessel-engine-cylinders.component.html',
  styleUrls: ['./vessel-engine-cylinders.component.css']
})
export class VesselEngineCylindersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initCylindersTemperatures();
  }

  private initCylindersTemperatures(): void {
    WidgetOptionsProvider.GetThermometerOptions('cylinder-1-temperature');
    WidgetOptionsProvider.GetThermometerOptions('cylinder-2-temperature');
    WidgetOptionsProvider.GetThermometerOptions('cylinder-3-temperature');
    WidgetOptionsProvider.GetThermometerOptions('cylinder-4-temperature');
    WidgetOptionsProvider.GetThermometerOptions('cylinder-5-temperature');
  }

}
