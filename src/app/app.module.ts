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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TagSelectorComponent } from './tags/sub-components/tag-selector/tag-selector.component';
import { FormsModule } from '@angular/forms';
import { TagValueComponent } from './tags/sub-components/tag-value/tag-value.component';
import { HomeComponent } from './home/home.component';
import { VesselMainDataComponent } from './vessel-data/vessel-main-data/vessel-main-data.component';
import { VesselEngineMainComponent } from './vessel-data/vessel-engine-main/vessel-engine-main.component';
import { WeatherComponent } from './weather/weather.component';
import { VesselEngineCylindersComponent } from './vessel-data/vessel-engine-cylinders/vessel-engine-cylinders.component';
import { VesselLinearGaugeComponent } from './widgets/vessel-linear-gauge/vessel-linear-gauge.component';
import { VesselCircularGaugeComponent } from './widgets/vessel-circular-gauge/vessel-circular-gauge.component';
import { VesselLineChartComponent } from './widgets/vessel-line-chart/vessel-line-chart.component';
import { VesselThrustersComponent } from './vessel-data/vessel-thrusters/vessel-thrusters.component';
import { VesselEngineTurbochargingComponent } from './vessel-data/vessel-engine-turbocharging/vessel-engine-turbocharging.component';
import { VesselFuelMainComponent } from './vessel-data/vessel-fuel-main/vessel-fuel-main.component';
import { VesselToggleComponent } from './widgets/vessel-toggle/vessel-toggle.component';
import { VesselFuelStatisticsComponent } from './vessel-data/vessel-fuel-statistics/vessel-fuel-statistics.component';
import { VesselArcGaugeComponent } from './widgets/vessel-arc-gauge/vessel-arc-gauge.component';

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
    VesselLineChartComponent,
    VesselThrustersComponent,
    VesselEngineTurbochargingComponent,
    VesselFuelMainComponent,
    VesselToggleComponent,
    VesselFuelStatisticsComponent,
    VesselArcGaugeComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    LinearGaugeAllModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
