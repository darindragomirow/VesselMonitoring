import { Component, ViewEncapsulation, OnInit, Input, ViewChild, OnDestroy } from '@angular/core';
import { LinearGaugeComponent } from '@syncfusion/ej2-angular-lineargauge';
import { Orientation } from '@syncfusion/ej2-lineargauge';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { ITag, ITagValue } from 'src/app/models/tagModels';
import { TagDataService } from 'src/app/services/tag-data.service';
import { IDataWidget } from '../models/widgetModel';

@Component({
  selector: 'app-vessel-linear-gauge',
  templateUrl: './vessel-linear-gauge.component.html',
  styleUrls: ['./vessel-linear-gauge.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VesselLinearGaugeComponent implements IDataWidget, OnInit, OnDestroy {
    @Input() orientation = 'Vertical';
    @Input() type = 'Thermometer';
    @Input() color = '#F02828';
    @Input() height = 100;

    @ViewChild('gauge')
    gauge: LinearGaugeComponent | undefined;
    id: number = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    axes: any[] = [];
    container: any;
    tag: ITag;
    tagData: ITagValue;
    tagValueTime: string;
    alive: boolean;

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

    tagChange(selectedTag: ITag): void {
        this.tag = selectedTag;
    }

    ngOnInit(): void {
        this.initializeGaugeOptions();
        this.applyCustomStyles();
        this.setOrientation();
        this.subscribeForTagValue();
    }

    ngOnDestroy(): void {
        this.alive = false;
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

    public subscribeForTagValue(): void{
        this.alive = true;
        interval(15000)
            .pipe(takeWhile(() => this.alive))
            .subscribe(() => {
          this.getTagValue();
        });
      }

    public getTagValue(): void {
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

    public updateInstrumentData(): void {
            if (this.gauge !== undefined
                && this.gauge.axes !== undefined
                && this.gauge.axes[0] !== undefined
                && this.gauge.axes[0].pointers !== undefined){
                    if (this.tagData.isGood){
                        // this.gauge.setPointerValue(0, 0, this.tagData.value);
                        this.gauge.axes[0].pointers[0].value = this.tagData.value;
                    } else {
                        // this.gauge.setPointerValue(0, 0, 0);
                        this.gauge.axes[0].pointers[0].value = 0;
                    }
            }
        }
}
