import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bar-chart-v2',
  templateUrl: './bar-chart-v2.component.html',
  styleUrls: ['./bar-chart-v2.component.scss']
})
export class BarChartV2Component implements OnChanges {

  // Data - for Dynamic Bar
  @Input() data: { year: string, regions: string[], menPopulation: number[], womenPopulation: number[], totalPopulation: number[] }[] = [];
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
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          left: 'right',
          data: ['Hommes', 'Femmes', 'Ensemble'],
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
          { name: 'Hommes', type: 'bar' },
          { name: 'Femmes', type: 'bar' },
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
            { data: v.menPopulation.map(p => ({ name: 'Hommes', value: p })) },
            { data: v.womenPopulation.map(p => ({ name: 'Femmes', value: p })) },
            { data: v.totalPopulation.map(p => ({ name: 'Ensemble', value: p })) },
            {
              data: [
                { name: 'Hommes', value: v.menPopulation.reduce((a, b) => a + b, 0) },
                { name: 'Femmes', value: v.womenPopulation.reduce((a, b) => a + b, 0) }
              ]
            }
          ]
        })
        )
    };
  }
}