import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bar-chart-v1',
  templateUrl: './bar-chart-v1.component.html',
  styleUrls: ['./bar-chart-v1.component.scss']
})
export class BarChartV1Component implements OnChanges {

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
        text: this.title
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