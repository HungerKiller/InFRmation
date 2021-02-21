import { Departement } from "./Departement";
import { Region } from "./Region";

export class Commune {
    code!: string;
    name!: string;
    codesPostaux!: string[];
    codeDepartement!: string;
    codeRegion!: string;
    departement!: Departement;
    region!: Region;
    population!: number;
    surface!: number;
    centre!: Centre;
    contour!: Contour;
}

export class Centre {
    type!: string;
    coordinates!: number[];
}

export class Contour {
    type!: string;
    coordinates!: number[][][];
}