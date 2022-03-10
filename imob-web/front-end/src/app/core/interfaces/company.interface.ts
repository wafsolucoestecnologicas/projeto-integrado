export interface Company {
    id?: number;
    CNPJ: string;
    corporateName: string;
    stateRegistration: string;
    percentageCommissionReceivable?: number;
    percentageCommissionPayableForClosedDeals?: number;
    percentageCommissionPayableForPropertyCaptured?: number;
    createdAt: string;
    updatedAt: string;
}

export interface CreateCompany {
    CNPJ: string;
    corporateName: string;
    stateRegistration: string;
    percentageCommissionReceivable: number;
    percentageCommissionPayableForClosedDeals: number;
    percentageCommissionPayableForPropertyCaptured: number;
}

export interface UpdateCompany {
    CNPJ: string;
    corporateName: string;
    stateRegistration: string;
    percentageCommissionReceivable: number;
    percentageCommissionPayableForClosedDeals: number;
    percentageCommissionPayableForPropertyCaptured: number;
}

export interface DeleteCompany {
    company: number;
}