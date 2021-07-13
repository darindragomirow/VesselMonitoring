import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public selectedNavigationItem = 'Home';
  public editModeEnabled = false;

  constructor(
    private dashboardService: DashboardService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  enterEditMode(): void {
    this.editModeEnabled = true;
    this.dashboardService.editModeEnabled = true;
    this.toastr.info('Edit mode entered.');
  }

  exitEditMode(): void {
    this.editModeEnabled = false;
    this.dashboardService.editModeEnabled = false;
    this.toastr.info('Edit mode closed.');
  }

  public selectNavigationItem(navItem: string): void {
    this.selectedNavigationItem = navItem;
  }
}
