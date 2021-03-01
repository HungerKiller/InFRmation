import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'src/app/Services/administration.service';

@Component({
  selector: 'app-administration-regions',
  templateUrl: './administration-regions.component.html',
  styleUrls: ['./administration-regions.component.scss']
})
export class AdministrationRegionsComponent implements OnInit {

  table_data: { code: string, name: string }[] = [];
  map_data: any;

  constructor(private administrationService: AdministrationService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.administrationService.getGeoJson(`/assets/geoRegions.json`).subscribe({
      next: geoJson => {
        this.table_data = geoJson.features.map((f:any) => f.properties);
        this.map_data = geoJson;
      },
      error: error => {
        console.log("error", error.error);
      }
    });
  }
}
