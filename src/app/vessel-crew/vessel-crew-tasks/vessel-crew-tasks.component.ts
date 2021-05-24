import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-vessel-crew-tasks',
  templateUrl: './vessel-crew-tasks.component.html',
  styleUrls: ['./vessel-crew-tasks.component.css']
})
export class VesselCrewTasksComponent implements OnInit {

  currentDate = new Date().toDateString();

  todo = [
    'Check PSV valves',
    'Check engine pressure level',
    'Check thrusters',
    'Check status of water pump',
    'Check status of cooling pump',
    'Check engine oil level'
  ];

  done = [
    'Check fuel level',
    'Check cooling level',
    'Check fresh water level',
    'Check active alarms',
    'Check status of fuel pump',
    'Check destination',
    'Check outside temperature',
    'Check engine temperature',
    'Check sea level',
    'Check safety equipment'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: any): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
