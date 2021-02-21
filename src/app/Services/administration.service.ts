import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoute } from '../api-routes';
import { Commune } from '../Models/Commune';
import { Departement } from '../Models/Departement';
import { Region } from '../Models/Region';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  constructor(private http: HttpClient) { }

  // Communes
  getCommunes(): Observable<Commune[]> {
    return this.http.get<Commune[]>(ApiRoute.COMMUNES.getCommunes());
  }

  getCommune(code: string): Observable<Commune> {
    return this.http.get<Commune>(ApiRoute.COMMUNES.getCommune(code));
  }

  // Departements
  getDepartements(): Observable<Departement[]> {
    return this.http.get<Departement[]>(ApiRoute.DEPARTEMENTS.getDepartements());
  }

  getDepartement(code: string): Observable<Departement> {
    return this.http.get<Departement>(ApiRoute.DEPARTEMENTS.getDepartement(code));
  }

  getCommunesOfDepartement(code: string): Observable<Commune> {
    return this.http.get<Commune>(ApiRoute.DEPARTEMENTS.getCommunesOfDepartement(code));
  }

  // Regions
  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(ApiRoute.REGIONS.getRegions());
  }

  getRegion(code: string): Observable<Region> {
    return this.http.get<Region>(ApiRoute.REGIONS.getRegion(code));
  }

  getDepartementsOfRegion(code: string): Observable<Departement> {
    return this.http.get<Departement>(ApiRoute.REGIONS.getDepartementsOfRegion(code));
  }
}