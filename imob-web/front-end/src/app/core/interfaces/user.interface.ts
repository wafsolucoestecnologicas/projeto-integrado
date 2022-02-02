import { Company } from './company.interface';
import { Profile } from './profile.interface';
import { Administrator } from './administrator.interface';
import { Manager } from './manager.interface';
import { Advisor } from './advisor.interface';
import { Broker } from './broker.interface';
import { Secretary } from './secretary.interface';

export interface User {
    id?: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    isAdministrator: boolean;
    isManager: boolean;
    isAdvisor: boolean;
    isBroker: boolean;
    isSecretary: boolean;
    company: Company;
    profile: Profile;
    administrator?: Administrator;
    manager?: Manager;
    advisor?: Advisor;
    broker?: Broker;
    secretary?: Secretary;
}