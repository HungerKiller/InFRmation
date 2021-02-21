import { Component, OnInit } from '@angular/core';
import { Region } from 'src/app/Models/Region';
import { AdministrationService } from 'src/app/Services/administration.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  regions: Region[] = [];
  loading: boolean = false;

  constructor(private administrationService: AdministrationService) { }

  ngOnInit(): void {
    this.getRegions();
  }

  getRegions(): void {
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