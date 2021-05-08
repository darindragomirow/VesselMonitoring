import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-vessel-line-chart',
  templateUrl: './vessel-line-chart.component.html',
  styleUrls: ['./vessel-line-chart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VesselLineChartComponent implements OnInit {
  @Input() id = '';
  @Input() title = '';

  config: any;

  constructor() { }

  ngOnInit(): void {
    this.initializeConfig();
    this.initializeChart();
  }

  private initializeChart(): void {
    setTimeout(() => {
      const chartDom = document.getElementById(this.id) as HTMLCanvasElement;
      if (chartDom){
        const chart = new Chart(
          chartDom,
          this.config
        );
      }
    }, 100);
  }

  private initializeConfig(): void {
    const labels = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];

    const data = {
      labels,
      datasets: [{
        label: this.title,
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };

    this.config = {
      type: 'line',
      data,
      options: {}
    };
  }
}
