import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stacked-area-chart-v1',
  templateUrl: './stacked-area-chart-v1.component.html',
  styleUrls: ['./stacked-area-chart-v1.component.scss']
})
export class StackedAreaChartV1Component implements OnChanges {

  // Title
  @Input() title!: string;
  // x-Axis labels
  @Input() xAxis_lables: string[] = [];
  // Data - array of year & array of {name, values} - for Stached Area
  @Input() data: { name: string; values: number[] }[] = [];
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
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: this.data.map(v => v.name),
        top: 30
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: this.xAxis_lables
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: this.data.map(v => ({
        name: v.name,
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
        },
        emphasis: {
          focus: 'series'
        },
        data: v.values
      }))
    };
  }
}