import { Company } from './company.interface';
import { Neighborhood } from './neighborhood.interface';
import { Manager } from './manager.interface';
import { Advisor } from './advisor.interface';
import { Broker } from './broker.interface';
import { Secretary } from './secretary.interface';
import { Owner } from './owner.interface';
import { Customer } from './customer.interface';
import { Property } from './property.interface';

export interface Address {
    id?: number;
    street: string;
    complement?: string;
    number: string;
    CEP: string;
    isCompany: boolean;
    isManager: boolean;
    isAdvisor: boolean;
    isBroker: boolean;
    isSecretary: boolean;
    isOwner: boolean;
    isCustomer: boolean;
    isProperty: boolean;
    company: Company;
    neighborhood: Neighborhood;
    manager?: Manager;
    advisor?: Advisor;
    broker?: Broker;
    secretary?: Secretary;
    owner?: Owner;
    customer?: Customer;
    property?: Property;
}

export interface CreateAddress {
    street: string;
    complement?: string;
    number: string;
    CEP: string;
    isCompany: boolean;
    isManager: boolean;
    isAdvisor: boolean;
    isBroker: boolean;
    isSecretary: boolean;
    isOwner: boolean;
    isCustomer: boolean;
    isProperty: boolean;
    company: Company;
    neighborhood: Neighborhood;
    manager?: Manager;
    advisor?: Advisor;
    broker?: Broker;
    secretary?: Secretary;
    owner?: Owner;
    customer?: Customer;
    property?: Property;
}

export interface UpdateAddress {
    street: string;
    complement?: string;
    number: string;
    CEP: string;
    isCompany: boolean;
    isManager: boolean;
    isAdvisor: boolean;
    isBroker: boolean;
    isSecretary: boolean;
    isOwner: boolean;
    isCustomer: boolean;
    isProperty: boolean;
    neighborhood: Neighborhood;
}

export interface DeleteAddress {
    address: number;
}

export interface ResponseViaCEPModel {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}