import { City } from './city.interface';

export interface Neighborhood {
    id?: number;
    neighborhood: string;
    city: City;
}

export interface CreateNeighborhood {
    neighborhood: string;
    city: City;
}

export interface UpdateNeighborhood {
    neighborhood: string;
    city: City;
}

export interface DeleteNeighborhood {
    neighborhood: number;
}
