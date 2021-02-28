import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'src/app/Services/administration.service';
import { Population, PopulationOfArea } from 'src/app/Models/Population';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  region_names: string[] = [];
  years: string[] = [];
  selectedYear: string = '2021';

  // Data of all years
  populations: Population[] = [];
  // Data of selected year (1 year)
  dataOfSelectedYear: PopulationOfArea[] = [];

  // Data - array of {region, population} - for Map and Pie
  region_population_array: { name: string; value: number; }[] = [];
  // Data - array of {gender, populations} - for Bar
  gender_populations_array: { name: string; values: number[] }[] = [];
  // Data - array of {age, populations} - for Bar
  age_populations_array: { name: string; values: number[] }[] = [];



  // Data - array of year & array of {name, values} - for Stached Area, Line
  year_gender_values_array: { name: string; values: number[] }[] = [];
  // Data - array of year & array of {name, values} - for Stached Area
  year_age_values_array: { name: string; values: number[] }[] = [];



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
    
    // Set array of {region, population} - for Map and Pie
    this.region_names = [];
    this.region_population_array = [];
    this.dataOfSelectedYear.forEach(element => {
      this.region_names.push(element.region_name);
      this.region_population_array.push({ name: element.region_name, value: element.together.total });
    });

    // Set array of {gender, populations} - for Bar
    let menValues: number[] = [];
    let womenValues: number[] = [];
    let totalValues: number[] = [];
    this.gender_populations_array = [];
    this.dataOfSelectedYear.forEach(element => {
      menValues.push(element.men.total);
      womenValues.push(element.women.total);
      totalValues.push(element.together.total);
    });
    this.gender_populations_array.push({ name: "Hommes", values: menValues });
    this.gender_populations_array.push({ name: "Femmes", values: womenValues });
    this.gender_populations_array.push({ name: "Ensemble", values: totalValues });

    // Set array of {age, populations} - for Bar
    let f0t19TotalValues: number[] = [];
    let f20t39TotalValues: number[] = [];
    let f40t59TotalValues: number[] = [];
    let f60t74TotalValues: number[] = [];
    let f75TotalValues: number[] = [];
    this.age_populations_array = [];
    this.dataOfSelectedYear.forEach(element => {
      f0t19TotalValues.push(element.together.between0and19);
      f20t39TotalValues.push(element.together.between20and39);
      f40t59TotalValues.push(element.together.between40and59);
      f60t74TotalValues.push(element.together.between60and74);
      f75TotalValues.push(element.together.greaterthan75);
    });
    this.age_populations_array.push({ name: "0 à 19 ans", values: f0t19TotalValues });
    this.age_populations_array.push({ name: "20 à 39 ans", values: f20t39TotalValues });
    this.age_populations_array.push({ name: "40 à 59 ans", values: f40t59TotalValues });
    this.age_populations_array.push({ name: "60 à 74 ans", values: f60t74TotalValues });
    this.age_populations_array.push({ name: "75 ans et plus", values: f75TotalValues });
    this.age_populations_array.push({ name: "Ensemble", values: totalValues });



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
      f75TotalValuesByYear.push(element.areas_population[0].together.greaterthan75);
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