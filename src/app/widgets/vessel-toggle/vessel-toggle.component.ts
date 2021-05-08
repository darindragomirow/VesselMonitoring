import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vessel-toggle',
  templateUrl: './vessel-toggle.component.html',
  styleUrls: ['./vessel-toggle.component.css']
})
export class VesselToggleComponent implements OnInit {
  @Input() on = true;
  onColor = 'rgb(93, 184, 93)';
  offColor = 'rgb(238, 60, 60)';
  neutralColor = 'rgb(222 213 213)';

  constructor(private mainElement: ElementRef) { }

  ngOnInit(): void {
    if (this.on){
      const toggleOn = this.mainElement.nativeElement.querySelector('.toggle-on');
      toggleOn.style.backgroundColor = this.onColor;
    } else {
      const toggleOff = this.mainElement.nativeElement.querySelector('.toggle-off');
      toggleOff.style.backgroundColor = this.offColor;
    }
  }

}
