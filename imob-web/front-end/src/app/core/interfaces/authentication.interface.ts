import { User } from './user.interface';
import { Company } from './company.interface';
import { Profile } from './profile.interface';
import { Administrator } from './administrator.interface';
import { Manager } from './manager.interface';
import { Advisor } from './advisor.interface';
import { Broker } from './broker.interface';
import { Secretary } from './secretary.interface';

export interface Authentication {
    user: User;
    company: Company;
    profile: Profile;
    administrator?: Administrator;
    manager?: Manager;
    advisor?: Advisor;
    broker?: Broker;
    secretary?: Secretary;
    token: string;
}
