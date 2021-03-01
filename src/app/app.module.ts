import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxEchartsModule } from 'ngx-echarts';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { BarChartV1Component } from './Components-Data-Visualization/bar-chart-v1/bar-chart-v1.component';
import { BarChartV2Component } from './Components-Data-Visualization/bar-chart-v2/bar-chart-v2.component';
import { BarChartV3Component } from './Components-Data-Visualization/bar-chart-v3/bar-chart-v3.component';
import { LineChartV1Component } from './Components-Data-Visualization/line-chart-v1/line-chart-v1.component';
import { MapChartRegionV1Component } from './Components-Data-Visualization/map-chart-region-v1/map-chart-region-v1.component';
import { PieChartV1Component } from './Components-Data-Visualization/pie-chart-v1/pie-chart-v1.component';
import { PieChartV2Component } from './Components-Data-Visualization/pie-chart-v2/pie-chart-v2.component';
import { StackedAreaChartV1Component } from './Components-Data-Visualization/stacked-area-chart-v1/stacked-area-chart-v1.component';
import { StackedAreaChartV2Component } from './Components-Data-Visualization/stacked-area-chart-v2/stacked-area-chart-v2.component';
import { TableRegionV1Component } from './Components-Data-Visualization/table-region-v1/table-region-v1.component';
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

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    // Data visualization
    BarChartV1Component,
    BarChartV2Component,
    BarChartV3Component,
    LineChartV1Component,
    MapChartRegionV1Component,
    PieChartV1Component,
    PieChartV2Component,
    StackedAreaChartV1Component,
    StackedAreaChartV2Component,
    TableRegionV1Component,
    // Population
    PopulationComponent,
    PopulationFranceComponent,
    PopulationFranceRegionsComponent,
    PopulationFranceDepartementsComponent,
    // Administration
    AdministrationComponent,
    // GeoApi
    GeoApiComponent,
    GeoApiRegionsComponent,
    GeoApiDepartementsComponent,
    GeoApiCommunesComponent,
    ReferencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzTableModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzGridModule,
    NzDividerModule,
    NzSelectModule,
    NzTabsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    })
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
