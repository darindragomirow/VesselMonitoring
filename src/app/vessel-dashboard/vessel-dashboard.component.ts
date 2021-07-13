import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { IComponent, LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-vessel-dashboard',
  templateUrl: './vessel-dashboard.component.html',
  styleUrls: ['./vessel-dashboard.component.css']
})
export class VesselDashboardComponent implements OnInit {
  constructor(public layoutService: LayoutService) { }

  ngOnInit(): void {
  }

  get components(): IComponent[] {
    return this.layoutService.components;
  }

  get options(): GridsterConfig {
    return this.layoutService.options;
  }
  get layout(): GridsterItem[] {
    return this.layoutService.layout;
  }
}
