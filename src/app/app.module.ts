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
import { AdministrationComponent } from './Components/administration/administration.component';
import { RegionComponent } from './Components/region/region.component';
import { DepartementComponent } from './Components/departement/departement.component';
import { CommuneComponent } from './Components/commune/commune.component';

import { NgxEchartsModule } from 'ngx-echarts';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { PieChartV1Component } from './Components/pie-chart-v1/pie-chart-v1.component';
import { PieChartV2Component } from './Components/pie-chart-v2/pie-chart-v2.component';
import { BarChartV1Component } from './Components/bar-chart-v1/bar-chart-v1.component';
import { StackedAreaChartV1Component } from './Components/stacked-area-chart-v1/stacked-area-chart-v1.component';
import { StackedAreaChartV2Component } from './Components/stacked-area-chart-v2/stacked-area-chart-v2.component';
import { LineChartV1Component } from './Components/line-chart-v1/line-chart-v1.component';
import { RadarChartV1Component } from './Components/radar-chart-v1/radar-chart-v1.component';
import { MapChartRegionV1Component } from './Components/map-chart-region-v1/map-chart-region-v1.component';
import { TableRegionV1Component } from './Components/table-region-v1/table-region-v1.component';
import { ViewFranceComponent } from './Components/view-france/view-france.component';
import { BarChartV2Component } from './Components/bar-chart-v2/bar-chart-v2.component';
import { BarChartV3Component } from './Components/bar-chart-v3/bar-chart-v3.component';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    AdministrationComponent,
    RegionComponent,
    DepartementComponent,
    CommuneComponent,
    PieChartV1Component,
    PieChartV2Component,
    BarChartV1Component,
    StackedAreaChartV1Component,
    StackedAreaChartV2Component,
    LineChartV1Component,
    RadarChartV1Component,
    MapChartRegionV1Component,
    TableRegionV1Component,
    ViewFranceComponent,
    BarChartV2Component,
    BarChartV3Component
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
