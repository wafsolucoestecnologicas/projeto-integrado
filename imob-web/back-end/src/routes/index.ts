import { Router } from 'express';
import authentication from './authentication.routes';
import company from './company.routes';
import profile from './profile.routes';
import user from './user.routes';
import administrator from './administrator.routes';
import manager from './manager.routes';
import advisor from './advisor.routes';
import broker from './broker.routes';
import secretary from './secretary.routes';
import owner from './owner.routes';
import customer from './customer.routes';
import property from './property.routes';
import lead from './lead.routes';
import business from './business.routes';
import receivable from './commission-receiveble.routes';
import payable from './commission-payable.routes';
import address from './address.routes';
import neighborhood from './neighborhood.routes';
import city from './city.routes';
import state from './state.routes';

const routes: { [key: string]: Router } = {
    authentication,
    company,
    profile,
    user,
    administrator,
    manager,
    advisor,
    broker,
    secretary,
    owner,
    customer,
    property,
    lead,
    business,
    receivable,
    payable,
    address,
    neighborhood,
    city,
    state
};

export default routes;