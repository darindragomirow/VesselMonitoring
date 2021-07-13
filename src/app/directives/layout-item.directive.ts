import {
  Directive,
  Input,
  OnChanges,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef
} from '@angular/core';
import { VesselDataCounterComponent } from '../widgets/vessel-data-counter/vessel-data-counter.component';
import { VesselFullCircularGaugeComponent } from '../widgets/vessel-full-circular-gauge/vessel-full-circular-gauge.component';
import { VesselLineChartComponent } from '../widgets/vessel-line-chart/vessel-line-chart.component';
import { VesselLinearGaugeComponent } from '../widgets/vessel-linear-gauge/vessel-linear-gauge.component';
import { VesselToggleComponent } from '../widgets/vessel-toggle/vessel-toggle.component';

@Directive({
  selector: '[appLayoutItem]'
})
export class LayoutItemDirective implements OnChanges {
  @Input() componentRef = '';
  component: ComponentRef<any> | undefined;
  components: { [name: string]: any; } = {
    fullGauge: VesselFullCircularGaugeComponent,
    toggle: VesselToggleComponent,
    chart: VesselLineChartComponent,
    thermometer: VesselLinearGaugeComponent,
    counter: VesselDataCounterComponent
  };

  constructor(
    private container: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnChanges(): void {
    if (this.componentRef){
      const neededComponent = this.components[this.componentRef];
      if (neededComponent) {
        const factory = this.resolver.resolveComponentFactory<any>(neededComponent);
        this.component = this.container.createComponent(factory);
      }
    }
  }
}
