import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vessel-crew-shifts',
  templateUrl: './vessel-crew-shifts.component.html',
  styleUrls: ['./vessel-crew-shifts.component.css']
})
export class VesselCrewShiftsComponent implements OnInit {

  shifts: any = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= 11; i++) {
      this.shifts.push({
        id: i,
        name: 'Employee ' + i,
        position: 'Engineer',
        sector: 'DBX ' + i,
      });
    }
  }

}
