import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/Models/Region';
import { AdministrationService } from 'src/app/Services/administration.service';
import { ECharts, EChartsOption } from 'echarts';
import * as echarts from 'echarts/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  regions: Region[] = [];
  loading: boolean = false;

  chartInstance: any;
  options: any;

  constructor(private administrationService: AdministrationService) { }

  ngOnInit(): void {
    this.getRegions();
    this.buildOption();
  }

  getRegions(): void {
    this.loading = true;
    this.administrationService.getRegions()
      .subscribe({
        next: data => {
          this.loading = false;
          this.regions = data;
        },
        error: error => {
          console.log("error", error.error);
        }
      });
  }

  buildOption(): void {
    this.administrationService.getRegionGeoJson().subscribe({
      next: geoJson => {
        echarts.registerMap('FR', geoJson, {
          Guadeloupe: {
            left: -4.5,
            top: 46.5,
            width: 0.7
          },
          Martinique: {
            left: -4.5,
            top: 45.5,
            width: 0.7
          },
          Guyane: {
            left: -4.5,
            top: 44.5,
            width: 0.7
          },
          'La Réunion': {
            left: -4.5,
            top: 43.5,
            width: 0.7
          },
          Mayotte: {
            left: -4.5,
            top: 42.5,
            width: 0.7
          },
        });

        this.options = {
          title: {
            text: 'Régions de la France'
          },
          tooltip: {
            trigger: 'item',
            transitionDuration: 0.2,
            formatter: '{a}<br/>{b}: {c}'
          },
          toolbox: {
            show: true,
            // orient: 'vertical',
            left: 'right',
            top: 'top',
            feature: {
              dataView: { readOnly: false },
              restore: {},
              saveAsImage: {}
            }
          },
          visualMap: {
            left: 'right',
            min: 800,
            max: 50000,
            text: ['High', 'Low'],
            realtime: false,
            calculable: true,
            inRange: {
              color: ['lightskyblue', 'yellow', 'orangered']
            }
          },
          series: [
            {
              name: 'Régions de la France',
              type: 'map',
              map: 'FR',
              roam: true,
              label: {
                show: true
              },
              data: [
                { name: 'Centre-Val de Loire', value: 31686.1 }
              ]
            }
          ]
        };

      },
      error: error => {
        console.log("error", error.error);
      }
    });
  }
}