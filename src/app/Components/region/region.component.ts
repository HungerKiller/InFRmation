import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'src/app/Services/administration.service';
import { Population, PopulationOfArea } from 'src/app/Models/Population';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  // Data of all years
  populations: Population[] = [];
  // Data of selected year (1 year)
  dataOfSelectedYear: PopulationOfArea[] = [];
  // Data - array of {name, value} - for Map and Pie
  name_value_array: { name: string; value: number; }[] = [];
  // Data - array of region & array of {name, values} - for Bar
  region_names: string[] = [];
  type_values_array: { name: string; values: number[] }[] = [];
  // Data - array of year & array of {name, values} - for Stached Area, Line
  years: string[] = [];
  year_gender_values_array: { name: string; values: number[] }[] = [];
  // Data - array of year & array of {name, values} - for Stached Area
  year_age_values_array: { name: string; values: number[] }[] = [];


  selectedYear: string = '2021';

  genders: { label: string; value: string; }[] = [{ label: 'Ensemble', value: 'Ensemble' }, { label: 'Femmes', value: 'Femmes' }, { label: 'Hommes', value: 'Hommes' }];
  selectedGender: string = 'Ensemble';

  constructor(private administrationService: AdministrationService) { }

  ngOnInit(): void {
    this.getRegionsPopulation();
  }

  getRegionsPopulation(): void {
    this.administrationService.getRegionsPopulation()
      .subscribe({
        next: data => {
          this.populations = data;
          // Set years
          this.years = this.populations.map(p => p.year);
          // Set datas for display
          this.setDisplayedDatas();
        },
        error: error => {
          console.log("error", error.error);
        }
      });
  }

  setDisplayedDatas(): void {
    // Set data of selected year
    this.dataOfSelectedYear = this.populations.find(element => element.year == this.selectedYear)?.areas_population!;
    // Set data of all regions (together.total)
    // todo
    this.name_value_array = [];
    this.dataOfSelectedYear.forEach(element => {
      this.name_value_array.push({ name: element.region_name, value: element.together.total });
    });
    // Set region names & type-values
    let menValues: number[] = [];
    let womenValues: number[] = [];
    let totalValues: number[] = [];
    this.region_names = [];
    this.dataOfSelectedYear.forEach(element => {
      this.region_names.push(element.region_name);
      menValues.push(element.men.total);
      womenValues.push(element.women.total);
      totalValues.push(element.together.total);
    });
    this.type_values_array.push({ name: "Hommes", values: menValues });
    this.type_values_array.push({ name: "Femmes", values: womenValues });
    this.type_values_array.push({ name: "Ensemble", values: totalValues });
    // Set year-gender-values
    let menTotalValuesByYear: number[] = [];
    let womenTotalValuesByYear: number[] = [];
    this.populations.forEach(element => {
      menTotalValuesByYear.push(element.areas_population[0].men.total);
      womenTotalValuesByYear.push(element.areas_population[0].women.total);
    });
    this.year_gender_values_array.push({ name: "Hommes", values: menTotalValuesByYear });
    this.year_gender_values_array.push({ name: "Femmes", values: womenTotalValuesByYear });
    // Set year-age-values
    let f0t19TotalValuesByYear: number[] = [];
    let f20t39TotalValuesByYear: number[] = [];
    let f40t59TotalValuesByYear: number[] = [];
    let f60t74TotalValuesByYear: number[] = [];
    let f75TotalValuesByYear: number[] = [];
    this.populations.forEach(element => {
      f0t19TotalValuesByYear.push(element.areas_population[0].together.between0and19);
      f20t39TotalValuesByYear.push(element.areas_population[0].together.between20and39);
      f40t59TotalValuesByYear.push(element.areas_population[0].together.between40and59);
      f60t74TotalValuesByYear.push(element.areas_population[0].together.between60and74);
      f75TotalValuesByYear.push(element.areas_population[0].together.greaterThan75);
    });
    this.year_age_values_array.push({ name: "0 à 19 ans", values: f0t19TotalValuesByYear });
    this.year_age_values_array.push({ name: "20 à 39 ans", values: f20t39TotalValuesByYear });
    this.year_age_values_array.push({ name: "40 à 59 ans", values: f40t59TotalValuesByYear });
    this.year_age_values_array.push({ name: "60 à 74 ans", values: f60t74TotalValuesByYear });
    this.year_age_values_array.push({ name: "75 ans et plus", values: f75TotalValuesByYear });
  }

  onChange(): void {
    this.setDisplayedDatas();
  }

  genderChanged(): void { }
}