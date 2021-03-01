import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pie-chart-v1',
  templateUrl: './pie-chart-v1.component.html',
  styleUrls: ['./pie-chart-v1.component.scss']
})
export class PieChartV1Component implements OnChanges {

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
      legend: {
        type: 'scroll',
        orient: 'vertical',
        left: 'left',
        top: 20,
        bottom: 20
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      series: [
        {
          name: 'Population',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: this.data
        }
      ]
    };
  }
}