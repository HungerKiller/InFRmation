import { Component, OnInit } from '@angular/core';
import { Commune } from 'src/app/Models/Commune';
import { AdministrationService } from 'src/app/Services/administration.service';

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.scss']
})
export class CommuneComponent implements OnInit {

  communes: Commune[] = [];
  loading: boolean = false;

  constructor(private administrationService: AdministrationService) { }

  ngOnInit(): void {
    this.getCommunes();
  }

  getCommunes(): void {
    this.loading = true;
    this.administrationService.getCommunes()
      .subscribe({
        next: data => {
          this.loading = false;
          this.communes = data;
        },
        error: error => {
          console.log("error", error.error);
        }
      });
  }
}