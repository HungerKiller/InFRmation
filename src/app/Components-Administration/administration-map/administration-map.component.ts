import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AdministrationService } from 'src/app/Services/administration.service';
import * as echarts from 'echarts/core';

@Component({
  selector: 'app-administration-map',
  templateUrl: './administration-map.component.html',
  styleUrls: ['./administration-map.component.scss']
})
export class AdministrationMapComponent implements OnChanges {

  // Title
  @Input() title!: string;
  // Data
  @Input() data: any;
  // Chart option
  option: any;

  constructor(private administrationService: AdministrationService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.buildMap();
  }

  buildMap(): void {
    echarts.registerMap('FR', this.data, {
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
  }
}