import { StateEntity } from '../entities/state.entity';

export interface CityModel {
    id: number;
    city: string;
    state: StateEntity;

    convertCityToUpperCase(): void;
}