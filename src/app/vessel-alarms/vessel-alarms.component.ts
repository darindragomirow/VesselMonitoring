import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vessel-alarms',
  templateUrl: './vessel-alarms.component.html',
  styleUrls: ['./vessel-alarms.component.css']
})
export class VesselAlarmsComponent implements OnInit {
  elements: any = [];

  constructor() { }

  ngOnInit(): void {
   for (let i = 1; i <= 11; i++) {
      this.elements.push({
        id: i,
        time: '23-05-2021 15:35:43.001',
        initiator: 'Alarm ' + i,
        description: 'Descr. ' + i,
        severity:  200 + i * 10,
        treshold: i * 10,
        condition: 'HIGH',
        acked: 'False',
      });
    }
  }

}
