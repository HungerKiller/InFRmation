import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-administration-table',
  templateUrl: './administration-table.component.html',
  styleUrls: ['./administration-table.component.scss']
})
export class AdministrationTableComponent implements OnChanges {

  @Input() data: { code: string, name: string }[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
  }
}