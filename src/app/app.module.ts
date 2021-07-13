import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { LinearGaugeAllModule } from '@syncfusion/ej2-angular-lineargauge';
import { AppComponent } from './app.component';
import { TagsComponent } from './tags/tags.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TagSelectorComponent } from './tags/sub-components/tag-selector/tag-selector.component';
import { FormsModule } from '@angular/forms';
import { TagValueComponent } from './tags/sub-components/tag-value/tag-value.component';
import { HomeComponent } from './home/home.component';
import { VesselMainDataComponent } from './vessel-data/vessel-main-data/vessel-main-data.component';
import { VesselEngineMainComponent } from './vessel-data/vessel-engine-main/vessel-engine-main.component';
import { AngularWeatherWidgetModule } from 'angular2-weather-widget';
import { WeatherComponent } from './weather/weather.component';
import { VesselEngineCylindersComponent } from './vessel-data/vessel-engine-cylinders/vessel-engine-cylinders.component';
import { VesselLinearGaugeComponent } from './widgets/vessel-linear-gauge/vessel-linear-gauge.component';
import { VesselCircularGaugeComponent } from './widgets/vessel-circular-gauge/vessel-circular-gauge.component';
import { VesselFullCircularGaugeComponent } from './widgets/vessel-full-circular-gauge/vessel-full-circular-gauge.component';
import { VesselLineChartComponent } from './widgets/vessel-line-chart/vessel-line-chart.component';
import { VesselThrustersComponent } from './vessel-data/vessel-thrusters/vessel-thrusters.component';
import { VesselEngineTurbochargingComponent } from './vessel-data/vessel-engine-turbocharging/vessel-engine-turbocharging.component';
import { VesselFuelMainComponent } from './vessel-data/vessel-fuel-main/vessel-fuel-main.component';
import { VesselToggleComponent } from './widgets/vessel-toggle/vessel-toggle.component';
import { VesselFuelStatisticsComponent } from './vessel-data/vessel-fuel-statistics/vessel-fuel-statistics.component';
import { VesselArcGaugeComponent } from './widgets/vessel-arc-gauge/vessel-arc-gauge.component';
import { VesselLiquidContainerComponent } from './widgets/vessel-liquid-container/vessel-liquid-container.component';
import { VesselDataCounterComponent } from './widgets/vessel-data-counter/vessel-data-counter.component';
import { VesselDataCounterIconComponent } from './widgets/vessel-data-counter-icon/vessel-data-counter-icon.component';
import { VesselCoolingComponent } from './vessel-data/vessel-cooling/vessel-cooling.component';
import { VesselCompressedAirComponent } from './vessel-data/vessel-compressed-air/vessel-compressed-air.component';
import { VesselAmmeterComponent } from './widgets/vessel-ammeter/vessel-ammeter.component';
import { VesselPowerPlantComponent } from './vessel-data/vessel-power-plant/vessel-power-plant.component';
import { VesselPowerPlantStatisticsComponent } from './vessel-data/vessel-power-plant-statistics/vessel-power-plant-statistics.component';
import { VesselCrewTasksComponent } from './vessel-crew/vessel-crew-tasks/vessel-crew-tasks.component';
import { VesselCrewShiftsComponent } from './vessel-crew/vessel-crew-shifts/vessel-crew-shifts.component';
import { VesselAlarmsComponent } from './vessel-alarms/vessel-alarms.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { VesselLocationComponent } from './vessel-location/vessel-location.component';
import { AgmCoreModule } from '@agm/core';
import { ToastrModule } from 'ngx-toastr';
import { VesselDashboardComponent } from './vessel-dashboard/vessel-dashboard.component';
import { GridsterModule } from 'angular-gridster2';
import { LayoutItemDirective } from './directives/layout-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    TagsComponent,
    NavigationComponent,
    CalendarComponent,
    TagSelectorComponent,
    TagValueComponent,
    HomeComponent,
    WeatherComponent,
    VesselMainDataComponent,
    VesselEngineMainComponent,
    VesselEngineCylindersComponent,
    VesselLinearGaugeComponent,
    VesselCircularGaugeComponent,
    VesselFullCircularGaugeComponent,
    VesselLineChartComponent,
    VesselThrustersComponent,
    VesselEngineTurbochargingComponent,
    VesselFuelMainComponent,
    VesselToggleComponent,
    VesselFuelStatisticsComponent,
    VesselArcGaugeComponent,
    VesselLiquidContainerComponent,
    VesselDataCounterComponent,
    VesselDataCounterIconComponent,
    VesselCoolingComponent,
    VesselCompressedAirComponent,
    VesselAmmeterComponent,
    VesselPowerPlantComponent,
    VesselPowerPlantStatisticsComponent,
    VesselCrewTasksComponent,
    VesselCrewShiftsComponent,
    VesselAlarmsComponent,
    VesselCrewShiftsComponent,
    VesselLocationComponent,
    VesselDashboardComponent,
    LayoutItemDirective],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgbModule,
    BrowserAnimationsModule,
    AngularWeatherWidgetModule,
    DragDropModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBZQtRhN6q-emVP915cH2UUFCFJnZJCtgM'
    }),
    ToastrModule.forRoot(),
    LinearGaugeAllModule,
    GridsterModule
  ],
  entryComponents: [
    VesselFullCircularGaugeComponent,
    VesselToggleComponent,
    VesselLinearGaugeComponent,
    VesselDataCounterComponent,
    VesselLineChartComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
