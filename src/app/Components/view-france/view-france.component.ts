import { Component, OnInit } from '@angular/core';
import { Population, PopulationOfArea } from 'src/app/Models/Population';
import { AdministrationService } from 'src/app/Services/administration.service';

@Component({
  selector: 'app-view-france',
  templateUrl: './view-france.component.html',
  styleUrls: ['./view-france.component.scss']
})
export class ViewFranceComponent implements OnInit {

  years: string[] = [];
  selectedYear: string = '2020';

  // Data of all years of all regions
  populations: Population[] = [];
  // Data of France (all years)
  dataOfFranceAllYear: PopulationOfArea[] = [];
  // Data of France (selected year)
  dataOfFranceSelectedYear!: PopulationOfArea;

  // France By Gender&Age
  // Data - array of {gender, population} - for Pie
  gender_population_array: { name: string; value: number; }[] = [];
  // Data - array of {age, population} - for Pie
  age_population_array: { name: string; value: number; }[] = [];

  // France By Year
  // Data - array of {gender, populations} - for Stached Area, Line
  gender_populations_array: { name: string; values: number[] }[] = [];
  // Data - array of {age, populations} - for Stached Area
  age_populations_array: { name: string; values: number[] }[] = [];
  // Data - array of {gender, populations} - for Bar
  gender_populations_with_total_array: { name: string; values: number[] }[] = [];
  // Data - array of {age, populations} - for Bar
  age_populations_with_total_array: { name: string; values: number[] }[] = [];

  constructor(private administrationService: AdministrationService) { }

  ngOnInit(): void {
    this.getFrancePopulation();
  }

  getFrancePopulation(): void {
    this.administrationService.getFrancePopulation()
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
    // Set data of France (all years)
    this.dataOfFranceAllYear = [];
    this.years = [];
    this.populations.forEach(element => {
      let dataFrance = element.areas_population.find(e => e.region_code == "France");
      if (dataFrance != null) {
        this.dataOfFranceAllYear.push(dataFrance);
        this.years.push(element.year);
      }
    });
    // Set data of France (selected year)
    let dataOfSelectedYear = this.populations.find(element => element.year == this.selectedYear)?.areas_population!;
    this.dataOfFranceSelectedYear = dataOfSelectedYear.find(element => element.region_code == "France")!;

    // Set array of {gender, population} - for Pie
    this.gender_population_array = [];
    this.gender_population_array.push({ name: "Hommes", value: this.dataOfFranceSelectedYear?.men.total });
    this.gender_population_array.push({ name: "Femmes", value: this.dataOfFranceSelectedYear?.women.total });

    // Set array of {age, population} - for Pie
    this.age_population_array = [];
    this.age_population_array.push({ name: "0 à 19 ans", value: this.dataOfFranceSelectedYear?.together.between0and19 });
    this.age_population_array.push({ name: "20 à 39 ans", value: this.dataOfFranceSelectedYear?.together.between20and39 });
    this.age_population_array.push({ name: "40 à 59 ans", value: this.dataOfFranceSelectedYear?.together.between40and59 });
    this.age_population_array.push({ name: "60 à 74 ans", value: this.dataOfFranceSelectedYear?.together.between60and74 });
    this.age_population_array.push({ name: "75 ans et plus", value: this.dataOfFranceSelectedYear?.together.greaterthan75 });

    // Set array of {gender, populations} - for Stached Area, Line
    let menTotalValuesByYear: number[] = [];
    let womenTotalValuesByYear: number[] = [];
    let totalValuesByYear: number[] = [];
    this.gender_populations_array = [];
    this.dataOfFranceAllYear.forEach(element => {
      menTotalValuesByYear.push(element.men.total);
      womenTotalValuesByYear.push(element.women.total);
      totalValuesByYear.push(element.together.total)
    });
    // Stached Area, Line
    this.gender_populations_array.push({ name: "Hommes", values: menTotalValuesByYear });
    this.gender_populations_array.push({ name: "Femmes", values: womenTotalValuesByYear });
    // Bar
    this.gender_populations_with_total_array.push({ name: "Hommes", values: menTotalValuesByYear });
    this.gender_populations_with_total_array.push({ name: "Femmes", values: womenTotalValuesByYear });
    this.gender_populations_with_total_array.push({ name: "Ensemble", values: totalValuesByYear });

    // Set array of {age, populations} - for Stached Area, Line
    let f0t19TotalValuesByYear: number[] = [];
    let f20t39TotalValuesByYear: number[] = [];
    let f40t59TotalValuesByYear: number[] = [];
    let f60t74TotalValuesByYear: number[] = [];
    let f75TotalValuesByYear: number[] = [];
    this.dataOfFranceAllYear.forEach(element => {
      f0t19TotalValuesByYear.push(element.together.between0and19);
      f20t39TotalValuesByYear.push(element.together.between20and39);
      f40t59TotalValuesByYear.push(element.together.between40and59);
      f60t74TotalValuesByYear.push(element.together.between60and74);
      f75TotalValuesByYear.push(element.together.greaterthan75);
    });
    // Stached Area, Line
    this.age_populations_array.push({ name: "0 à 19 ans", values: f0t19TotalValuesByYear });
    this.age_populations_array.push({ name: "20 à 39 ans", values: f20t39TotalValuesByYear });
    this.age_populations_array.push({ name: "40 à 59 ans", values: f40t59TotalValuesByYear });
    this.age_populations_array.push({ name: "60 à 74 ans", values: f60t74TotalValuesByYear });
    this.age_populations_array.push({ name: "75 ans et plus", values: f75TotalValuesByYear });
    // Bar
    this.age_populations_with_total_array.push({ name: "0 à 19 ans", values: f0t19TotalValuesByYear });
    this.age_populations_with_total_array.push({ name: "20 à 39 ans", values: f20t39TotalValuesByYear });
    this.age_populations_with_total_array.push({ name: "40 à 59 ans", values: f40t59TotalValuesByYear });
    this.age_populations_with_total_array.push({ name: "60 à 74 ans", values: f60t74TotalValuesByYear });
    this.age_populations_with_total_array.push({ name: "75 ans et plus", values: f75TotalValuesByYear });
    this.age_populations_with_total_array.push({ name: "Ensemble", values: totalValuesByYear });
  }
}