import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CircularGauge, ILoadedEventArgs, GaugeTheme } from '@syncfusion/ej2-circulargauge';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { ITag, ITagValue } from 'src/app/models/tagModels';
import { TagDataService } from 'src/app/services/tag-data.service';
import { IDataWidget } from '../models/widgetModel';

@Component({
  selector: 'app-vessel-circular-gauge',
  templateUrl: './vessel-circular-gauge.component.html',
  styleUrls: ['./vessel-circular-gauge.component.css']
})
export class VesselCircularGaugeComponent implements IDataWidget, OnInit, OnDestroy {
  @Input() startAngle = 270;
  @Input() endAngle = 90;
  @Input() radius = '100%';
  id: number = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  tag: ITag;
  tagData: ITagValue;
  tagValueTime: string;
  alive: boolean;
  gauge!: CircularGauge;

  constructor(private tagDataService: TagDataService) {
    this.tag = {
      id: 'ns=2;s=Simulation Examples.Functions.Ramp1',
      browseName: 'Ramp1',
      dataType: 'Int64'
    };
    this.tagData = {
      value: 'Bad data',
      dataType: 'String',
      isGood: false,
      time: '',
      errorMessage: ''
    };
    this.tagValueTime = '';
    this.alive = false;
  }

  ngOnInit(): void {
    this.initCircularGauge();
    this.subscribeForTagValue();
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  tagChange(selectedTag: ITag): void {
    this.tag = selectedTag;
  }

  subscribeForTagValue(): void {
    this.alive = true;
    interval(5000)
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => this.getTagValue());
  }

  getTagValue(): void {
    this.tagDataService
        .getValue(this.tag)
        .subscribe({
          next: result => {
             this.tagData = result as ITagValue;
             const date = new Date(this.tagData.time);
             const valueHours = date.getHours();
             const valueMinutes = date.getMinutes();
             this.tagValueTime = `${valueHours}:${valueMinutes}`;
             this.updateInstrumentData();
            } ,
          error: err => { console.log(err); }
        });
  }

  updateInstrumentData(): void {
    if (this.gauge && this.tagData.isGood){
      this.gauge.setPointerValue(0, 0, this.tagData.value);
    }
  }

  private initCircularGauge(): void {
    this.gauge = new CircularGauge({
      background: 'transparent',
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
              value: 100,
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
     this.gauge.appendTo(`#cg-${this.id}`);
     this.applyCustomStyles();
    }, 100);
  }

  private applyCustomStyles(): void {
    $('svg').css('margin-top', '-15%');
  }
}
