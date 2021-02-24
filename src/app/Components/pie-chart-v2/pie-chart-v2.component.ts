import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pie-chart-v2',
  templateUrl: './pie-chart-v2.component.html',
  styleUrls: ['./pie-chart-v2.component.scss']
})
export class PieChartV2Component implements OnChanges {

  // Title
  @Input() title!: string;
  // Data - array of {name, value}
  @Input() data: { name: string; value: number; }[] = [];
  // Chart option
  option: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.buildOption();
  }

  buildOption(): void {
    this.option = {
      title: {
        text: this.title,
        left: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      series: [
        {
          name: 'Population',
          type: 'pie',
          radius: [20, 60],
          labelLine: {
            length: 15,
            length2: 0,
            maxSurfaceAngle: 80
          },
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
          },
          label: {
            alignTo: 'edge',
            formatter: '{name|{b}}\n{time|{c}}',
            minMargin: 5,
            edgeDistance: 10,
            lineHeight: 15,
            rich: {
              time: {
                fontSize: 10,
                color: '#999'
              }
            }
          },
          data: this.data
        }
      ]
    };
  }
}