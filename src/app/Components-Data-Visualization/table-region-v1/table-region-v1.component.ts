import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PopulationOfArea } from 'src/app/Models/Population';

@Component({
  selector: 'app-table-region-v1',
  templateUrl: './table-region-v1.component.html',
  styleUrls: ['./table-region-v1.component.scss']
})
export class TableRegionV1Component implements OnChanges {


  @Input() data: PopulationOfArea[] = [];
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
  }

}
