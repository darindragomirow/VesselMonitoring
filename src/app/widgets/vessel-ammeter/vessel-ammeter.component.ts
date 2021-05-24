import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vessel-ammeter',
  templateUrl: './vessel-ammeter.component.html',
  styleUrls: ['./vessel-ammeter.component.css']
})
export class VesselAmmeterComponent implements OnInit {
  @Input() units = 'A';

  constructor() { }

  ngOnInit(): void {
  }

}
