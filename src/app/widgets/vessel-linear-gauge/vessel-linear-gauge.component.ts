import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
import { ILoadedEventArgs, LinearGaugeTheme } from '@syncfusion/ej2-lineargauge';

@Component({
  selector: 'app-vessel-linear-gauge',
  templateUrl: './vessel-linear-gauge.component.html',
  styleUrls: ['./vessel-linear-gauge.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VesselLinearGaugeComponent implements OnInit {
    // @ViewChild('gauge')
    // public gauge: LinearGaugeComponent;

  // Initializing Axes

  public Axes: any[] = [{
    minimum: 0,
    maximum: 200,
    line: {
        width: 0
    },
    majorTicks: {
        interval: 50,
        color: '#9e9e9e'
    },
    minorTicks: {
        color: '#9e9e9e'
    },
    pointers: [
        {
            value: 90,
            height: 10,
            width: 10,
            roundedCornerRadius: 5,
            type: 'Bar',
            color: '#f02828'
        }
    ]
}];

  public Container: any = {
      width: 10,
      height: 150,
      roundedCornerRadius: 5,
      type: 'Thermometer'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  // custom code start
  public load(args: any): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.gauge.theme = selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1) as LinearGaugeTheme;
}
}
