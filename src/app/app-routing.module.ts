import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from './Components/administration/administration.component';
import { CommuneComponent } from './Components/commune/commune.component';
import { DepartementComponent } from './Components/departement/departement.component';
import { RegionComponent } from './Components/region/region.component';
import { ViewFranceComponent } from './Components/view-france/view-france.component';

const routes: Routes = [
  { path: '', redirectTo: '/administration', pathMatch: 'full' },
  { path: 'administration', component: AdministrationComponent },
  {
    path: 'administration',
    component: AdministrationComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'france', // child route path
        component: ViewFranceComponent // child route component that the router renders
      },
      {
        path: 'regions',
        component: RegionComponent
      },
      {
        path: 'departements',
        component: DepartementComponent
      },
      {
        path: 'communes',
        component: CommuneComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
