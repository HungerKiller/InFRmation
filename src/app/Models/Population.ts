export class Population {
    year!: string;
    areas_population!: PopulationOfArea[];
}

export class PopulationOfArea {
    region_code!: string;
    region_name!: string;
    together!: PopulationByAge;
    men!: PopulationByAge;
    women!: PopulationByAge;
}

export class PopulationByAge {
    between0and19!: number;
    between20and39!: number;
    between40and59!: number;
    between60and74!: number;
    greaterThan75!: number;
    total!: number;
}