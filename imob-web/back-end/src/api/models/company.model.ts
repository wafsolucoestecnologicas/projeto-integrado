export interface CompanyModel {
    id: number;
    cnpj: string;
    corporateName: string;
    stateRegistration: string;
    percentageCommissionReceived: number;
    percentageCommissionPayable: number;
    createdAt: Date;
    updatedAt: Date;

    setCreatedAt(): void;
    setUpdatedAt(): void;
}