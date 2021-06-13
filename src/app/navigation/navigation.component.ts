import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public selectedNavigationItem = 'Home';
  public editModeEnabled = false;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
  }

  enterEditMode(): void {
    this.editModeEnabled = true;
    this.dashboardService.editModeEnabled = true;
  }

  exitEditMode(): void {
    this.editModeEnabled = false;
    this.dashboardService.editModeEnabled = false;
  }

  public selectNavigationItem(navItem: string): void {
    this.selectedNavigationItem = navItem;
  }
}
