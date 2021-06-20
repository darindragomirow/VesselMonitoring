import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BollingerBands } from '@syncfusion/ej2-charts';
import { interval } from 'rxjs';
import { takeUntil, takeWhile } from 'rxjs/operators';
import { ITag, ITagValue } from 'src/app/models/tagModels';
import { TagDataService } from 'src/app/services/tag-data.service';
import { IGaugeOptions } from '../gaugeOptions';
import { IDataWidget } from '../models/widgetModel';
import { WidgetOptionsProvider } from '../widgetOptionsProvider';
import * as echarts from 'echarts';

@Component({
  selector: 'app-vessel-full-circular-gauge',
  templateUrl: './vessel-full-circular-gauge.component.html',
  styleUrls: ['./vessel-full-circular-gauge.component.css']
})
export class VesselFullCircularGaugeComponent implements IDataWidget, OnInit, OnDestroy, AfterViewInit {
  @Input() height: string;
  @Input() width: string;
  @ViewChild('fullGauge')
  gaugeElement!: ElementRef;
  id: number = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  tag: ITag;
  tagData: ITagValue;
  tagValueTime: string;
  gaugeOptions: IGaugeOptions;
  alive: boolean;
  gauge: any;

  constructor(private tagDataService: TagDataService) {
    this.height = '200px';
    this.width = '200px';
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
    this.gaugeOptions = WidgetOptionsProvider.GetGaugeOptions();
    this.alive = false;
   }

  ngOnInit(): void {
    this.applyCustomStyles();
  }

  ngAfterViewInit(): void {
    if (this.gaugeElement){
      this.gauge = echarts.init(this.gaugeElement.nativeElement);
      this.subscribeForTagValue();
    }
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
    this.gaugeOptions.series[0].data[0].value = this.tagData.value;
    this.gauge?.setOption(this.gaugeOptions);
  }

  private applyCustomStyles(): void {
    $('.gauge').css('height', this.height);
    $('.gauge').css('width', this.width);
  }
}
