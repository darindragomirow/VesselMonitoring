import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TagsComponent } from './tags/tags.component';
import { VesselEngineCylindersComponent } from './vessel-data/vessel-engine-cylinders/vessel-engine-cylinders.component';
import { VesselEngineMainComponent } from './vessel-data/vessel-engine-main/vessel-engine-main.component';
import { VesselEngineTurbochargingComponent } from './vessel-data/vessel-engine-turbocharging/vessel-engine-turbocharging.component';
import { VesselFuelMainComponent } from './vessel-data/vessel-fuel-main/vessel-fuel-main.component';
import { VesselFuelStatisticsComponent } from './vessel-data/vessel-fuel-statistics/vessel-fuel-statistics.component';
import { VesselThrustersComponent } from './vessel-data/vessel-thrusters/vessel-thrusters.component';
import { WeatherComponent } from './weather/weather.component';
import { VesselLineChartComponent } from './widgets/vessel-line-chart/vessel-line-chart.component';
import { VesselLinearGaugeComponent } from './widgets/vessel-linear-gauge/vessel-linear-gauge.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'app-root', component: AppComponent },
  { path: 'app-navigation', component: NavigationComponent },
  { path: 'app-home', component: HomeComponent },
  { path: 'app-tags', component: TagsComponent },
  { path: 'app-calendar', component: CalendarComponent },
  { path: 'app-weather', component: WeatherComponent },
  { path: 'app-vessel-engine-main', component: VesselEngineMainComponent },
  { path: 'app-vessel-engine-cylinders', component: VesselEngineCylindersComponent },
  { path: 'app-vessel-thrusters', component: VesselThrustersComponent },
  { path: 'app-vessel-engine-turbocharging', component: VesselEngineTurbochargingComponent },
  { path: 'app-vessel-fuel-main', component: VesselFuelMainComponent },
  { path: 'app-vessel-fuel-statistics', component: VesselFuelStatisticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
