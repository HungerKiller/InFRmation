import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/app/Models/Departement';
import { AdministrationService } from 'src/app/Services/administration.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.scss']
})
export class DepartementComponent implements OnInit {

  departements: Departement[] = [];
  loading: boolean = false;

  constructor(private administrationService: AdministrationService) { }

  ngOnInit(): void {
    this.getDepartements();
  }

  getDepartements(): void {
    this.loading = true;
    this.administrationService.getDepartements()
      .subscribe({
        next: data => {
          this.loading = false;
          this.departements = data;
        },
        error: error => {
          console.log("error", error.error);
        }
      });
  }
}
