import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AdministrationService } from 'src/app/Services/administration.service';
import * as echarts from 'echarts/core';

@Component({
  selector: 'app-map-chart-region-v1',
  templateUrl: './map-chart-region-v1.component.html',
  styleUrls: ['./map-chart-region-v1.component.scss']
})
export class MapChartRegionV1Component implements OnChanges {

  // Title
  @Input() title!: string;
  // Data - array of {name, value}
  @Input() data: { name: string; value: number; }[] = [];
  // Chart option
  option: any;

  constructor(private administrationService: AdministrationService) {
   }

  ngOnChanges(changes: SimpleChanges) {
    this.buildMap();
  }

  buildMap(): void {
    this.administrationService.getRegionsGeoJson().subscribe({
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
        this.option = {
          title: {
            text: this.title
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
            min: 200000,
            max: 13000000,
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
              data: this.data
            }
          ]
        };
      },
      error: error => {
        console.log("error", error.error);
      }
    });
  }

  buildOption(): void {
    this.option = {
      title: {
        text: this.title
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
        min: 200000,
        max: 13000000,
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
          data: this.data
        }
      ]
    };
  }
}