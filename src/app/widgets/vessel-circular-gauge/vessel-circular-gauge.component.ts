import { Component, Input, OnInit } from '@angular/core';
import { CircularGauge, ILoadedEventArgs, GaugeTheme } from '@syncfusion/ej2-circulargauge';

@Component({
  selector: 'app-vessel-circular-gauge',
  templateUrl: './vessel-circular-gauge.component.html',
  styleUrls: ['./vessel-circular-gauge.component.css']
})
export class VesselCircularGaugeComponent implements OnInit {
  @Input() startAngle = 270;
  @Input() endAngle = 90;
  @Input() radius = '100%';
  public id: number = Math.floor(Math.random() * (100 - 1 + 1) + 1);

  constructor() { }

  ngOnInit(): void {
    this.initCircularGauge();
  }

  private initCircularGauge(): void {
    const circulargauge: CircularGauge = new CircularGauge({
      axes: [{
          radius: this.radius,
          startAngle: this.startAngle,
          endAngle: this.endAngle,
          majorTicks: {
              width: 0
          },
          lineStyle: { width: 10 },
          minorTicks: {
              width: 0
          },
          labelStyle: {
              font: {
                  fontFamily: 'Roboto',
                  size: '12px',
                  fontWeight: 'Regular'
              },
              offset: 0
          },
          pointers: [{
              value: 60,
              radius: '60%',
              pointerWidth: 10,
              cap: {
                  radius: 8,
                  border: { width: 0 }
              },
              needleTail: {
                  length: '20%'
              }
          }]
      }]
  });
    setTimeout(() => {
     circulargauge.appendTo(`#cg-${this.id}`);
     this.applyCustomStyles();
    }, 100);
  }

  private applyCustomStyles(): void {
    $('svg').css('margin-top', '-15%');
    $('rect').attr('fill', 'transparent');
  }
}
