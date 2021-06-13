import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { ITag, ITagValue } from 'src/app/models/tagModels';
import { TagDataService } from 'src/app/services/tag-data.service';
import { IDataWidget } from '../models/widgetModel';

@Component({
  selector: 'app-vessel-toggle',
  templateUrl: './vessel-toggle.component.html',
  styleUrls: ['./vessel-toggle.component.css']
})
export class VesselToggleComponent implements IDataWidget, OnInit, OnDestroy {
  @Input() on = true;
  onColor = 'rgb(93, 184, 93)';
  offColor = 'rgb(238, 60, 60)';
  neutralColor = 'rgb(222 213 213)';
  toggleOn: any;
  toggleOff: any;
  tag: ITag;
  tagData: ITagValue;
  tagValueTime: string;
  alive: boolean;

  constructor(
    private mainElement: ElementRef,
    private tagDataService: TagDataService) {
      this.tag = {
        id: 'ns=2;s=Simulation Examples.Functions.User3',
        browseName: 'User3',
        dataType: 'Boolean'
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
    this.toggleOn = this.mainElement.nativeElement.querySelector('.toggle-on');
    this.toggleOff = this.mainElement.nativeElement.querySelector('.toggle-off');
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
    if (this.tagData.isGood){
      if (this.tagData.value){
        this.toggleOn.style.backgroundColor = this.onColor;
        this.toggleOff.style.backgroundColor = this.neutralColor;
      } else {
        this.toggleOff.style.backgroundColor = this.offColor;
        this.toggleOn.style.backgroundColor = this.neutralColor;
      }
    }
  }
}
