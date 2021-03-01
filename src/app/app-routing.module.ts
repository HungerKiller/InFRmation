import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopulationComponent } from './Components-Population/population/population.component';
import { PopulationFranceComponent } from './Components-Population/population-france/population-france.component';
import { PopulationFranceRegionsComponent } from './Components-Population/population-france-regions/population-france-regions.component';
import { PopulationFranceDepartementsComponent } from './Components-Population/population-france-departements/population-france-departements.component';
import { AdministrationComponent } from './Components-Administration/administration/administration.component';
import { GeoApiComponent } from './Components-GeoApi/geo-api/geo-api.component';
import { GeoApiRegionsComponent } from './Components-GeoApi/geo-api-regions/geo-api-regions.component';
import { GeoApiDepartementsComponent } from './Components-GeoApi/geo-api-departements/geo-api-departements.component';
import { GeoApiCommunesComponent } from './Components-GeoApi/geo-api-communes/geo-api-communes.component';
import { ReferencesComponent } from './Components/references/references.component';

const routes: Routes = [
  { path: '', redirectTo: '/administration', pathMatch: 'full' },
  { path: 'references', component: ReferencesComponent},
  {
    path: 'population',
    component: PopulationComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'france', // child route path
        component: PopulationFranceComponent // child route component that the router renders
      },
      {
        path: 'regions',
        component: PopulationFranceRegionsComponent
      },
      {
        path: 'departements',
        component: PopulationFranceDepartementsComponent
      }
    ]
  },
  {
    path: 'geoapi',
    component: GeoApiComponent,
    children: [
      {
        path: 'regions',
        component: GeoApiRegionsComponent
      },
      {
        path: 'departements',
        component: GeoApiDepartementsComponent
      },
      {
        path: 'communes',
        component: GeoApiCommunesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
