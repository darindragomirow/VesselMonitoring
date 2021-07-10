import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TagsComponent } from './tags/tags.component';
import { VesselAlarmsComponent } from './vessel-alarms/vessel-alarms.component';
import { VesselCrewShiftsComponent } from './vessel-crew/vessel-crew-shifts/vessel-crew-shifts.component';
import { VesselCrewTasksComponent } from './vessel-crew/vessel-crew-tasks/vessel-crew-tasks.component';
import { VesselCompressedAirComponent } from './vessel-data/vessel-compressed-air/vessel-compressed-air.component';
import { VesselCoolingComponent } from './vessel-data/vessel-cooling/vessel-cooling.component';
import { VesselEngineCylindersComponent } from './vessel-data/vessel-engine-cylinders/vessel-engine-cylinders.component';
import { VesselEngineMainComponent } from './vessel-data/vessel-engine-main/vessel-engine-main.component';
import { VesselEngineTurbochargingComponent } from './vessel-data/vessel-engine-turbocharging/vessel-engine-turbocharging.component';
import { VesselFuelMainComponent } from './vessel-data/vessel-fuel-main/vessel-fuel-main.component';
import { VesselFuelStatisticsComponent } from './vessel-data/vessel-fuel-statistics/vessel-fuel-statistics.component';
import { VesselPowerPlantStatisticsComponent } from './vessel-data/vessel-power-plant-statistics/vessel-power-plant-statistics.component';
import { VesselPowerPlantComponent } from './vessel-data/vessel-power-plant/vessel-power-plant.component';
import { VesselThrustersComponent } from './vessel-data/vessel-thrusters/vessel-thrusters.component';
import { VesselLocationComponent } from './vessel-location/vessel-location.component';
import { WeatherComponent } from './weather/weather.component';

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
  { path: 'app-vessel-fuel-statistics', component: VesselFuelStatisticsComponent },
  { path: 'app-vessel-cooling', component: VesselCoolingComponent },
  { path: 'app-vessel-compressed-air', component: VesselCompressedAirComponent },
  { path: 'app-vessel-power-plant', component: VesselPowerPlantComponent },
  { path: 'app-vessel-power-plant-statistics', component: VesselPowerPlantStatisticsComponent },
  { path: 'app-vessel-crew-tasks', component: VesselCrewTasksComponent },
  { path: 'app-vessel-crew-shifts', component: VesselCrewShiftsComponent },
  { path: 'app-vessel-alarms', component: VesselAlarmsComponent },
  { path: 'app-vessel-location', component: VesselLocationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
