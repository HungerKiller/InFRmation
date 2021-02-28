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

  // Data - for Dynamic Bar (all years, all regions, all genders)
  year_gender_region_populations_array: { year: string, regions: string[], menPopulation: number[], womenPopulation: number[], totalPopulation: number[] }[] = [];
  // Data - for Dynamic Bar (all years, all regions, all ages)
  year_age_region_populations_array: { year: string, regions: string[], menPopulation: number[], womenPopulation: number[], totalPopulation: number[] }[] = [];

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



    // Set year-gender-region values - for Dynamic Bar
    this.year_gender_region_populations_array = [];
    this.populations.forEach(elementOneYear => {
      let regions: string[] = [];
      let menPopulation: number[] = [];
      let womenPopulation: number[] = [];
      let totalPopulation: number[] = [];
      elementOneYear.areas_population.forEach(elementOneRegion => {
        // Set regions of this year
        regions.push(elementOneRegion.region_name);
        // Set population of this year (for each region)
        menPopulation.push(elementOneRegion.men.total);
        womenPopulation.push(elementOneRegion.women.total);
        totalPopulation.push(elementOneRegion.together.total);
      });
      this.year_gender_region_populations_array.push({ year: elementOneYear.year, regions: regions, menPopulation: menPopulation, womenPopulation: womenPopulation, totalPopulation: totalPopulation });
    });


  }

  onChange(): void {
    this.setDisplayedDatas();
  }

}