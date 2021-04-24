import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TagsComponent } from './tags/tags.component';
import { VesselEngineCylindersComponent } from './vessel-data/vessel-engine-cylinders/vessel-engine-cylinders.component';
import { VesselEngineMainComponent } from './vessel-data/vessel-engine-main/vessel-engine-main.component';
import { WeatherComponent } from './weather/weather.component';
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
  { path: 'app-vessel-linear-gauge', component: VesselLinearGaugeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
