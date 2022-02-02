export interface Company {
    id?: number;
    CNPJ: string;
    corporateName: string;
    stateRegistration: string;
    percentageCommissionReceivable?: number;
    percentageCommissionPayableForClosedDeals?: number;
    percentageCommissionPayableForPropertyCaptured?: number;
}