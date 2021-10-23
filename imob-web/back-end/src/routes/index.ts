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

const routes: any = {
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
    customer
};

export default routes;