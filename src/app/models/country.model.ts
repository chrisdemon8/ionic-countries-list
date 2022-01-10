export class Country {
    id?:string; 
    name:string; 
    flag:string; 
    motto: string;
    map: string;
    language: string;
    capital: string;
    area: string;
    continent: string;
    population: string;
    idh: string;
    density: string;
    climate: string;

    constructor() {
        this.name = '';
        this.flag = '';
        this.motto = '';
        this.map = '';
        this.language = '';
        this.capital = '';
        this.area = '';
        this.continent = '';
        this.population = '';
        this.idh = '';
        this.density = '';
        this.climate = '';
    }
}
