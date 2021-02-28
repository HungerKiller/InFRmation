import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bar-chart-v3',
  templateUrl: './bar-chart-v3.component.html',
  styleUrls: ['./bar-chart-v3.component.scss']
})
export class BarChartV3Component implements OnChanges {

  // Title
  @Input() title!: string;
  // x-Axis labels
  @Input() xAxis_lables: string[] = [];
  // Data - array of region & array of {name, values} - for Bar
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
          type: 'shadow'
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
      xAxis: {
        type: 'category',
        axisLabel: {
          interval: 0,
          rotate: 45
        },
        data: this.xAxis_lables
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      series:
        this.data.map(v => ({
          name: v.name,
          type: 'bar',
          data: v.values
        }))
    };
  }
}