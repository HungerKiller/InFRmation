import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/Models/Region';
import { AdministrationService } from 'src/app/Services/administration.service';
import { ECharts, EChartsOption } from 'echarts';
import * as echarts from 'echarts/core';
import { Population, PopulationOfArea } from 'src/app/Models/Population';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  loading: boolean = false;

  populations: Population[] = [];
  years: number[] = [];
  selectedYear: number = 2021;
  selectedData: PopulationOfArea[] = [];

  options: any;

  constructor(private administrationService: AdministrationService) { }

  ngOnInit(): void {
    this.getRegionsPopulation();
    this.buildOption();
  }

  getRegionsPopulation(): void {
    this.loading = true;
    this.administrationService.getRegionsPopulation()
      .subscribe({
        next: data => {
          this.loading = false;
          this.populations = data;
          // Set years
          this.years = [];
          this.populations.forEach(element => {
            this.years.push(element.year);
            if(element.year == this.selectedYear)
              this.selectedData = element.areas_population;
          });
        },
        error: error => {
          console.log("error", error.error);
        }
      });
  }

  buildOption(): void {
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

        let dataPopulation: {
          name: string;
          value: number;
        }[] = [];

        this.selectedData.forEach(element => {
          dataPopulation.push({name: element.region_name, value: element.together.total});
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
              data: dataPopulation
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