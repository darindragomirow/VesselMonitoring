import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { ITag, ITagValue } from '../models/tagModels';
import { TagDataService } from '../services/tag-data.service';
import { IDataWidget } from '../widgets/models/widgetModel';

@Component({
  selector: 'app-vessel-location',
  templateUrl: './vessel-location.component.html',
  styleUrls: ['./vessel-location.component.css']
})
export class VesselLocationComponent implements OnInit, OnDestroy {
  lat = 55.678418;
  lng = -6.709007;
  latTag: ITag;
  lngTag: ITag;
  alive: boolean;

  constructor(
    private tagDataService: TagDataService,
    private toastr: ToastrService) {
    this.latTag = {
      id: 'ns=2;s=Simulation Examples.Functions.Latitude',
      browseName: 'Latitude',
      dataType: 'Double'
    };
    this.lngTag = {
      id: 'ns=2;s=Simulation Examples.Functions.Longitude',
      browseName: 'Longitude',
      dataType: 'Double'
    };
    this.alive = false;
   }

   ngOnInit(): void {
    //  this.subscribeForTagValue();
    this.toastr.info('Location successfully received.');
    this.alive = true;
    interval(1000)
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => this.simulateLocation());
  }

  // for testing purposes
  simulateLocation(): void {
    this.lat += 0.001;
    this.lng += 0.001;
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  tagChange(selectedTag: ITag): void {
    throw new Error('Method not implemented.');
  }
  subscribeForTagValue(): void {
    this.alive = true;

    // subscribe for latitude
    interval(5000)
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => this.getLatValue());

    // subscribe for longitude
    interval(5000)
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => this.getLngValue());
  }

  getLatValue(): void {
    this.tagDataService
        .getValue(this.latTag)
        .subscribe({
          next: result => {
             if (result.isGood){
               this.lat = result.value as number;
             }
            } ,
          error: err => { console.log(err); }
        });
  }

  getLngValue(): void {
    this.tagDataService
        .getValue(this.lngTag)
        .subscribe({
          next: result => {
             if (result.isGood){
               this.lng = result.value as number;
             }
            } ,
          error: err => { console.log(err); }
        });
  }
}
