import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/Models/Region';
import { AdministrationService } from 'src/app/Services/administration.service';

@Component({
  selector: 'app-geo-api-regions',
  templateUrl: './geo-api-regions.component.html',
  styleUrls: ['./geo-api-regions.component.scss']
})
export class GeoApiRegionsComponent implements OnInit {

  regions: Region[] = [];
  loading: boolean = false;

  constructor(private administrationService: AdministrationService) { }

  ngOnInit(): void {
    this.getDepartements();
  }

  getDepartements(): void {
    this.loading = true;
    this.administrationService.getRegions()
      .subscribe({
        next: data => {
          this.loading = false;
          this.regions = data;
        },
        error: error => {
          console.log("error", error.error);
        }
      });
  }
}
