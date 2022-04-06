import { State } from './state.interface';

export interface City {
    id?: number;
    city: string;
    state: State;
}

export interface CreateCity {
    city: string;
    state: State;
}

export interface UpdateCity {
    city: string;
    state: State;
}

export interface DeleteCity {
    city: number;
}
