import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vessel-data-counter',
  templateUrl: './vessel-data-counter.component.html',
  styleUrls: ['./vessel-data-counter.component.css']
})
export class VesselDataCounterComponent implements OnInit {
  @Input() value: number = 0;
  @Input() title: string = 'No title';

  constructor() { }

  ngOnInit(): void {
  }

}
