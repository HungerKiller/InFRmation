import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'src/app/Services/administration.service';

@Component({
  selector: 'app-administration-departements',
  templateUrl: './administration-departements.component.html',
  styleUrls: ['./administration-departements.component.scss']
})
export class AdministrationDepartementsComponent implements OnInit {

  table_data: { code: string, name: string }[] = [];
  map_data: any;

  constructor(private administrationService: AdministrationService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.administrationService.getGeoJson(`/assets/geoDepartements.json`).subscribe({
      next: geoJson => {
        this.table_data = geoJson.features.map((f: any) => f.properties);
        this.map_data = geoJson;
      },
      error: error => {
        console.log("error", error.error);
      }
    });
  }
}
