import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AdministrationService } from 'src/app/Services/administration.service';
import * as echarts from 'echarts/core';

@Component({
  selector: 'administration-map',
  templateUrl: './administration-map.component.html',
  styleUrls: ['./administration-map.component.scss']
})
export class AdministrationMapComponent implements OnInit {

  // Title
  @Input() title!: string;
  // Data - array of {name, value}
  @Input() data: { name: string; value: number; }[] = [];
  // Chart option
  option: any;

  constructor(private administrationService: AdministrationService) {
   }

   ngOnInit(): void {
    this.buildMap();
  }

  buildMap(): void {
    this.administrationService.getGeoJson(`/assets/geoDepartements.json`).subscribe({
      next: geoJson => {

        // geoJson.features.map(f => f.properties).map(p => p.nom);

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
            text: this.title,
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            transitionDuration: 0.2,
            formatter: '{b}'
          },
          series: [
            {
              name: 'Régions de la France',
              type: 'map',
              map: 'FR',
              roam: true,
              label: {
                show: true
              }
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