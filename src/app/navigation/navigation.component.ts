import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public selectedNavigationItem = 'Home';

  constructor() { }

  ngOnInit(): void {
  }

  public selectNavigationItem(navItem: string): void {
    this.selectedNavigationItem = navItem;
  }
}
