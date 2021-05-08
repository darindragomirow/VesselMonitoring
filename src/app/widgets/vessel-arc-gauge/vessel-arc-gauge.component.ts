import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { CircularGaugeComponent } from '@syncfusion/ej2-angular-circulargauge';
import { ILoadedEventArgs } from '@syncfusion/ej2-circulargauge';
import { Slider, SliderChangeEventArgs  } from '@syncfusion/ej2-inputs';

@Component({
    selector: 'app-vessel-arc-gauge',
    templateUrl: './vessel-arc-gauge.component.html',
    styleUrls: ['./vessel-arc-gauge.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class VesselArcGaugeComponent implements OnInit {

    sliderValue = 60;

    @ViewChild('circulargauge')
    public circulargauge: any;

    public lineStyle = {
        width: 0
    };

    public labelStyle = {
        position: 'Inside', useRangeColor: true,
        font: { size: '0px', color: 'white', fontFamily: 'Roboto', fontStyle: 'Regular' }
    };

    public ranges = [
        {
            start: 0, end: 300,
            radius: '100%',
            startWidth: 30, endWidth: 30,
            color: '#E0E0E0',
            roundedCornerRadius: 20
        },
    ];

    public pointers = [{
        roundedCornerRadius: 20,
        value: 60,
        type: 'RangeBar',
        radius: '90%',
        color: '#e5ce20',
        border: {
            color: 'grey',
            width: 0
        },
        animation: {
            enable: false
        },
        pointerWidth: 30
    }];

    public titleStyle = { size: '18px' };
    public title = 'Fuel level';
    public majorTicks = {
        height: 10
    };
    public minorTicks = {
        height: 10
    };
    public tail = {
        length: '18%', color: '#757575'
    };
    public pointerCap = {
        radius: 7, color: '#757575'
    };

    public annotations = [{
        content: '<div id="pointervalue" style="font-size:35px;width:120px;text-align:center">' +
        this.sliderValue.toString() + '/100</div>',
        angle: 0,
        zIndex: '1',
        radius: '0%'
    }, {
        content: '<div id="slider" style="height:70px;width:250px;"></div>',
        angle: 0,
        zIndex: '1',
        radius: '-100%'
    }];

    public annotationRender(id: string, sliderValue: number): void {
      const first: Slider = new Slider({
          // Set the value for slider
          min: 0, max: 100,
          type: 'MinRange',
          limits: { enabled: true, minStart: 0, minEnd: 100 },
          value: sliderValue,
          change: (args: any) => {
              sliderValue = args.value as number;
              if (this.circulargauge) {
              if (!isNaN(sliderValue)) {
                  this.circulargauge.isProtectedOnChange = true;
                  if (sliderValue >= 0 && sliderValue < 20) {
                      this.circulargauge.axes[0].pointers[0].color = '#ea501a';
                  } else if (sliderValue >= 20 && sliderValue < 40) {
                      this.circulargauge.axes[0].pointers[0].color = '#f79c02';
                  } else if (sliderValue >= 40 && sliderValue < 60) {
                      this.circulargauge.axes[0].pointers[0].color = '#e5ce20';
                  } else if (sliderValue >= 60 && sliderValue < 80) {
                      this.circulargauge.axes[0].pointers[0].color = '#a1cb43';
                  } else if (sliderValue >= 80 && sliderValue < 100) {
                      this.circulargauge.axes[0].pointers[0].color = '#82b944';
                  }
                  this.circulargauge.setPointerValue(0, 0, sliderValue);
                  const pointerValue = document.getElementById('pointervalue');
                  if (pointerValue !== null) {
                     pointerValue.innerHTML = this.circulargauge.axes[0].pointers[0].value.toString() + '/100';
                  }
              }
          }
          }
      });
      first.appendTo('#' + id);
  }

    constructor() {}

    ngOnInit(): void {
    }

    // if (!isNaN(sliderValue)) {
    //   this.circulargauge['isProtectedOnChange'] = true;
    //   if (sliderValue >= 0 && sliderValue < 20) {
    //       this.circulargauge.axes[0].pointers[0].color = '#ea501a';
    //   } else if (sliderValue >= 20 && sliderValue < 40) {
    //       this.circulargauge.axes[0].pointers[0].color = '#f79c02';
    //   } else if (sliderValue >= 40 && sliderValue < 60) {
    //       this.circulargauge.axes[0].pointers[0].color = '#e5ce20';
    //   } else if (sliderValue >= 60 && sliderValue < 80) {
    //       this.circulargauge.axes[0].pointers[0].color = '#a1cb43';
    //   } else if (sliderValue >= 80 && sliderValue < 100) {
    //       this.circulargauge.axes[0].pointers[0].color = '#82b944';
    //   }
    //   this.circulargauge.setPointerValue(0, 0, sliderValue);
    //   if (document.getElementById('pointervalue')) {
    //       document.getElementById('pointervalue').innerHTML = this.circulargauge.axes[0].pointers[0].value.toString() + '/100';
    //   }
  }
