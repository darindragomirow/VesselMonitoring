import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { AlarmConditiontype, IAlarm, IAlarmCondition } from '../models/alarmModels';
import { ITag, ITagValue } from '../models/tagModels';
import { TagDataService } from '../services/tag-data.service';

@Component({
  selector: 'app-vessel-alarms',
  templateUrl: './vessel-alarms.component.html',
  styleUrls: ['./vessel-alarms.component.css']
})
export class VesselAlarmsComponent implements OnInit, OnDestroy {
  elements: IAlarm[] = [];
  alarmTag: ITag;
  alarmData: ITagValue;
  alarmDataTime = '';
  alive: boolean;
  counter = 1;
  AlarmHighHigh: IAlarmCondition = {
    value: 90,
    color: 'red',
    severity: 200,
    type: AlarmConditiontype.HighHigh
  };
  AlarmHigh = {
    value: 80,
    color: 'orange',
    severity: 100,
    type: AlarmConditiontype.High
  };
  AlarmLow = {
    value: 30,
    color: 'pink',
    severity: 100,
    type: AlarmConditiontype.Low
  };
  AlarmLowLow = {
    value: 20,
    color: 'purple',
    severity: 200,
    type: AlarmConditiontype.LowLow
  };

  constructor(
    private tagDataService: TagDataService,
    private toastr: ToastrService) {
    this.alarmTag = {
      id: 'ns=2;s=Simulation Examples.Functions.D-13ESVPT01',
      browseName: 'D-13ESVPT01',
      dataType: 'Double'
    };
    this.alarmData = {
      value: 'Bad data',
      dataType: 'String',
      isGood: false,
      time: '',
      errorMessage: ''
    };
    this.alive = false;
   }

  ngOnInit(): void {
  this.alive = true;
  interval(1000)
  .pipe(takeWhile(() => this.alive))
  .subscribe(() => this.listenForAlarms());

  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  listenForAlarms(): void {
    this.tagDataService
        .getValue(this.alarmTag)
        .subscribe({
          next: result => {
             this.alarmData = result as ITagValue;
             if (!this.alarmData.isGood){
               return;
             }

             const date = new Date(this.alarmData.time);
             const valueHours = date.getHours();
             const valueMinutes = date.getMinutes();
             this.alarmDataTime = `${valueHours}:${valueMinutes}`;
             let alarmCondition: any = null;
             if (this.alarmData.value >= this.AlarmHighHigh.value){
              alarmCondition = this.AlarmHighHigh;
             } else if (this.alarmData.value >= this.AlarmHigh.value){
              alarmCondition = this.AlarmHigh;
             } else if (this.alarmData.value <= this.AlarmLowLow.value){
              alarmCondition = this.AlarmLowLow;
             } else if (this.alarmData.value <= this.AlarmLow.value){
              alarmCondition = this.AlarmLow;
             }

             if (alarmCondition){
               this.generateAlarm(
                 this.alarmTag.browseName,
                 this.alarmData.value,
                 this.alarmDataTime,
                 alarmCondition);
             }
            } ,
          error: err => { console.log(err); }
        });
  }

  generateAlarm(
    tagBrowseName: string,
    tagValue: any,
    alarmDataTime: string,
    condition: IAlarmCondition): void {
    const conditionType = AlarmConditiontype[condition.type];
    const conditionText = condition.type === AlarmConditiontype.HighHigh
    || condition.type === AlarmConditiontype.High
    ? 'is over'
    : 'is under';
    const isExistingAlarm = this.elements.find(e => e.condition === conditionType);
    if (!isExistingAlarm){
      this.elements.push({
          id: this.counter++,
          time: alarmDataTime,
          initiator: tagBrowseName,
          description: `The value[${tagValue}] of tag ${tagBrowseName} ${conditionText} the limit.`,
          severity:  condition.severity,
          treshold: condition.value,
          condition: conditionType,
          acked: false,
          color: condition.color
        });

      this.toastr.warning('An alarm was generated just now!');
    }
  }

  deleteAlarm(id: number): void{
    const element = this.elements.find(e => e.id === id);
    if (element){
      setTimeout(() => {
        element.acked = true;
        this.toastr.success('The acked alarm was removed from the list.');
      }, 3000);
    }
  }
}
