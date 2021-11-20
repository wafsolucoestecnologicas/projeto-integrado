export interface CompanyModel {
    id: number;
    CNPJ: string;
    corporateName: string;
    stateRegistration: string;
    percentageCommissionReceived: number;
    percentageCommissionPayable: number;
    createdAt: Date;
    updatedAt: Date;

    convertValuesToNumber(): void;
    setCreatedAt(): void;
    setUpdatedAt(): void;
}