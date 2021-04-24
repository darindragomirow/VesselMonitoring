import { Component, OnInit, Input } from '@angular/core';
import { ITag, ITagValue } from '../../../models/tagModels';
import { Observable, throwError, interval } from 'rxjs';
import { TagDataService } from 'src/app/services/tag-data.service';

@Component({
  selector: 'app-tag-value',
  templateUrl: './tag-value.component.html',
  styleUrls: ['./tag-value.component.css']
})
export class TagValueComponent implements OnInit {
  @Input() public tag: ITag;
  public tagData: ITagValue;
  public isValueLoaded = false;
  public tagValueTime = '';

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
   }

  ngOnInit(): void {
    this.subscribeForTagValue();
  }

  private subscribeForTagValue(): void{
    interval(5000).subscribe(() => {
      this.getTagValue();
    });
  }

  private getTagValue(): void {
    this.tagDataService
    .getValue(this.tag)
    .subscribe({
      next: result => {
         this.tagData = result as ITagValue;
         this.isValueLoaded = true;
         const date = new Date(this.tagData.time);
         const valueHours = date.getHours();
         const valueMinutes = date.getMinutes();
         this.tagValueTime = `${valueHours}:${valueMinutes}`;
        } ,
      error: err => { console.log(err); }
    });
  }
}
