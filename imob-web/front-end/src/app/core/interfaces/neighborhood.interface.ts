import { City } from './city.interface';

export interface Neighborhood {
    id?: number;
    neighborhood: string;
    city: City;
}