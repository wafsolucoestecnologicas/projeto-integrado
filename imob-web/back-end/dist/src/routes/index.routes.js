"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var authentication_routes_1 = __importDefault(require("./authentication.routes"));
var company_routes_1 = __importDefault(require("./company.routes"));
var profile_routes_1 = __importDefault(require("./profile.routes"));
var user_routes_1 = __importDefault(require("./user.routes"));
var administrator_routes_1 = __importDefault(require("./administrator.routes"));
var manager_routes_1 = __importDefault(require("./manager.routes"));
var advisor_routes_1 = __importDefault(require("./advisor.routes"));
var broker_routes_1 = __importDefault(require("./broker.routes"));
var secretary_routes_1 = __importDefault(require("./secretary.routes"));
var owner_routes_1 = __importDefault(require("./owner.routes"));
var customer_routes_1 = __importDefault(require("./customer.routes"));
var property_routes_1 = __importDefault(require("./property.routes"));
var lead_routes_1 = __importDefault(require("./lead.routes"));
var business_routes_1 = __importDefault(require("./business.routes"));
var commission_receivable_routes_1 = __importDefault(require("./commission-receivable.routes"));
var commission_payable_routes_1 = __importDefault(require("./commission-payable.routes"));
var address_routes_1 = __importDefault(require("./address.routes"));
var neighborhood_routes_1 = __importDefault(require("./neighborhood.routes"));
var city_routes_1 = __importDefault(require("./city.routes"));
var state_routes_1 = __importDefault(require("./state.routes"));
var routes = {
    authentication: authentication_routes_1.default,
    company: company_routes_1.default,
    profile: profile_routes_1.default,
    user: user_routes_1.default,
    administrator: administrator_routes_1.default,
    manager: manager_routes_1.default,
    advisor: advisor_routes_1.default,
    broker: broker_routes_1.default,
    secretary: secretary_routes_1.default,
    owner: owner_routes_1.default,
    customer: customer_routes_1.default,
    property: property_routes_1.default,
    lead: lead_routes_1.default,
    business: business_routes_1.default,
    receivable: commission_receivable_routes_1.default,
    payable: commission_payable_routes_1.default,
    address: address_routes_1.default,
    neighborhood: neighborhood_routes_1.default,
    city: city_routes_1.default,
    state: state_routes_1.default
};
exports.default = routes;
//# sourceMappingURL=index.routes.js.map