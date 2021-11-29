export interface CompanyModel {
    id: number;
    CNPJ: string;
    corporateName: string;
    stateRegistration: string;
    percentageCommissionReceivable: number;
    percentageCommissionPayableForClosedDeals: number;
    percentageCommissionPayableForPropertyCaptured: number;
    createdAt: Date;
    updatedAt: Date;

    convertValuesToNumber(): void;
    setCreatedAt(): void;
    setUpdatedAt(): void;
}