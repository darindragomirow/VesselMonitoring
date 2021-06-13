import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public editModeEnabled = false;

  constructor() { }
}
