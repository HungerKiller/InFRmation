import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bar-chart-v3',
  templateUrl: './bar-chart-v3.component.html',
  styleUrls: ['./bar-chart-v3.component.scss']
})
export class BarChartV3Component implements OnChanges {

  // Data - for Dynamic Bar
  @Input() data: { year: string, regions: string[], f0t19Population: number[], f20t39Population: number[], f40t59Population: number[], f60t74Population: number[], f75Population: number[], totalPopulation: number[] }[] = [];
  // Chart option
  option: any;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.buildOption();
  }

  buildOption(): void {
    this.option = {
      baseOption: {
        timeline: {
          axisType: 'category',
          // realtime: false,
          // loop: false,
          autoPlay: true,
          // currentIndex: 2,
          playInterval: 1000,
          // controlStyle: {
          //     position: 'left'
          // },
          data: this.data.map(v => v.year)
        },
        tooltip: {
        },
        legend: {
          left: 'right',
          data: ['0 à 19 ans', '20 à 39 ans', '40 à 59 ans', '60 à 74 ans', '75 ans et plus', 'Ensemble'],
          selected: {
            'Ensemble': false
          }
        },
        calculable: true,
        grid: {
          bottom: 120,
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow',
              label: {
                show: true
              }
            }
          }
        },
        xAxis: [
          {
            type: 'category',
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: { show: false }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          { name: '0 à 19 ans', type: 'bar' },
          { name: '20 à 39 ans', type: 'bar' },
          { name: '40 à 59 ans', type: 'bar' },
          { name: '60 à 74 ans', type: 'bar' },
          { name: '75 ans et plus', type: 'bar' },
          { name: 'Ensemble', type: 'bar' },
          {
            name: 'Proportion',
            type: 'pie',
            center: ['80%', '35%'],
            z: 100,
            radius: '28%',
            label: {
              show: false,
              position: 'center'
            },
            labelLine: {
              show: false
            }
          }
        ]
      },
      options:
        this.data.map(v => ({
          title: { text: 'Population ' + v.year },
          xAxis: [
            {
              data: v.regions
            }
          ],
          series: [
            { data: v.f0t19Population.map(p => ({ name: '0 à 19 ans', value: p })) },
            { data: v.f20t39Population.map(p => ({ name: '20 à 39 ans', value: p })) },
            { data: v.f40t59Population.map(p => ({ name: '40 à 59 ans', value: p })) },
            { data: v.f60t74Population.map(p => ({ name: '60 à 74 ans', value: p })) },
            { data: v.f75Population.map(p => ({ name: '75 ans et plus', value: p })) },
            { data: v.totalPopulation.map(p => ({ name: 'Ensemble', value: p })) },
            {
              data: [
                { name: '0 à 19 ans', value: v.f0t19Population.reduce((a, b) => a + b, 0) },
                { name: '20 à 39 ans', value: v.f20t39Population.reduce((a, b) => a + b, 0) },
                { name: '40 à 59 ans', value: v.f40t59Population.reduce((a, b) => a + b, 0) },
                { name: '60 à 74 ans', value: v.f60t74Population.reduce((a, b) => a + b, 0) },
                { name: '75 ans et plus', value: v.f75Population.reduce((a, b) => a + b, 0) }
              ]
            }
          ]
        })
        )
    };
  }
}