import { CityEntity } from '../entities/city.entity';

export interface NeighborhoodModel {
    id: number;
    neighborhood: string;
    city: CityEntity;
}