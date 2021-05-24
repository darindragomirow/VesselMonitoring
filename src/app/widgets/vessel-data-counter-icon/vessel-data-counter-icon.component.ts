import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vessel-data-counter-icon',
  templateUrl: './vessel-data-counter-icon.component.html',
  styleUrls: ['./vessel-data-counter-icon.component.css']
})
export class VesselDataCounterIconComponent implements OnInit {
  @Input() value: number = 0;
  @Input() title: string = 'No title';

  constructor() { }

  ngOnInit(): void {
  }

}
