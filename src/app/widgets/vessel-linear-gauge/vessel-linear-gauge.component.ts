import { Component, ViewEncapsulation, OnInit, Input, ViewChild } from '@angular/core';
import { LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
import { ContainerType, ILoadedEventArgs, Orientation } from '@syncfusion/ej2-lineargauge';
import { timeStamp } from 'console';

@Component({
  selector: 'app-vessel-linear-gauge',
  templateUrl: './vessel-linear-gauge.component.html',
  styleUrls: ['./vessel-linear-gauge.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VesselLinearGaugeComponent implements OnInit {
    @Input() orientation = 'Vertical';
    @Input() type = 'Thermometer';
    @Input() color = '#F02828';
    @Input() height = 100;

    @ViewChild('gauge')
    public gauge: LinearGaugeComponent | undefined;
    public id: number = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    public axes: any[] = [];
    public container: any;

  constructor() {
  }

  ngOnInit(): void {
      this.initializeGaugeOptions();
      this.applyCustomStyles();
      this.setOrientation();
  }

  private applyCustomStyles(): void {
    setTimeout(() => {
        const widgets = $('svg > rect').attr('fill', 'transparent');
    }, 200);
  }

  private initializeGaugeOptions(): void {
    this.axes = [{
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
                height: 5,
                width: 5,
                roundedCornerRadius: 5,
                type: 'Bar',
                color: this.color
            }
        ]
    }];

    this.container = {
          width: 7,
          height: this.height,
          roundedCornerRadius: 5,
          type: this.type
      };
  }

  private setOrientation(): void {
    setTimeout(() => {
        if (this.gauge) {
            this.gauge.orientation = this.orientation as Orientation;
            this.gauge.refresh();
        }
    }, 100);
  }
}
