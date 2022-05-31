import { DeleteResult, EntityManager, getManager, UpdateResult } from 'typeorm';
import { Request, Response } from 'express';
import { BusinessEntity } from '../entities/business.entity';
import { BusinessService } from '../services/business.service';
import { AdministratorEntity } from '../entities/administrator.entity';
import { AdministratorService } from '../services/administrator.service';
import { ManagerEntity } from '../entities/manager.entity';
import { ManagerService } from '../services/manager.service';
import { AdvisorEntity } from '../entities/advisor.entity';
import { AdvisorService } from '../services/advisor.service';
import { BrokerEntity } from '../entities/broker.entity';
import { BrokerService } from '../services/broker.service';
import { SecretaryEntity } from '../entities/secretary.entity';
import { SecretaryService } from '../services/secretary.service';
import { OwnerEntity } from '../entities/owner.entity';
import { OwnerService } from '../services/owner.service';
import { CustomerEntity } from '../entities/customer.entity';
import { CustomerService } from '../services/customer.service';
import { PropertyEntity } from '../entities/property.entity';
import { PropertyService } from '../services/property.service';
import { LeadEntity } from '../entities/lead.entity';
import { LeadService } from '../services/lead.service';
import { returnMessages, statusMessages } from '../../../utils/utils';

export class BusinessController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const businessService: BusinessService =
                new BusinessService();

            const businessEntity: BusinessEntity[] =
                await businessService.index(request.payload);

            return response.status(200).json(businessEntity);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const businessService: BusinessService =
                    new BusinessService();

                const result: boolean =
                    businessService.validateData(request.body);

                if (result) {
                    const administratorService: AdministratorService = new AdministratorService();
                    const managerService: ManagerService = new ManagerService();
                    const advisorService: AdvisorService = new AdvisorService();
                    const brokerService: BrokerService = new BrokerService();
                    const secretaryService: SecretaryService = new SecretaryService();
                    const ownerService: OwnerService = new OwnerService();
                    const customerService: CustomerService = new CustomerService();
                    const propertyService: PropertyService = new PropertyService();
                    const leadService: LeadService = new LeadService();

                    request.body.company = request.payload.company;
                    request.body.dateVisit = (request.body.dateVisit) ? request.body.dateVisit : null;
                    request.body.dateSale = (request.body.dateSale) ? request.body.dateSale : null;

                    if (request.body.administrator && request.body.administrator.id) {
                        const administratorEntity: AdministratorEntity | undefined =
                            await administratorService.read(request.body.administrador.id);

                        if (administratorEntity) {
                            request.body.administrador = administratorEntity
                        } else {
                            request.body.administrator = null;
                        }
                    } else {
                        request.body.administrator = null;
                    }

                    if (request.body.manager && request.body.manager.id) {
                        const managerEntity: ManagerEntity | undefined =
                            await managerService.read(request.body.manager.id, request.payload);

                        if (managerEntity) {
                            request.body.manager = managerEntity;
                        } else {
                            request.body.manager = null;
                        }
                    } else {
                        request.body.manager = null;
                    }

                    if (request.body.advisor && request.body.advisor.id) {
                        const advisorEntity: AdvisorEntity | undefined =
                            await advisorService.read(request.body.advisor.id, request.payload);

                        if (advisorEntity) {
                            request.body.advisor = advisorEntity;
                        } else {
                            request.body.advisor = null;
                        }
                    } else {
                        request.body.advisor = null;
                    }

                    if (request.body.broker && request.body.broker.id) {
                        const brokerEntity: BrokerEntity | undefined =
                            await brokerService.read(request.body.broker.id, request.payload);

                        if (brokerEntity) {
                            request.body.broker = brokerEntity;
                        } else {
                            request.body.broker = null;
                        }
                    } else {
                        request.body.broker = null;
                    }

                    if (request.body.secretary && request.body.secretary.id) {
                        const secretaryEntity: SecretaryEntity | undefined =
                            await secretaryService.read(request.body.secretary.id, request.payload);

                        if (secretaryEntity) {
                            request.body.secretary = secretaryEntity;
                        } else {
                            request.body.secretary = null;
                        }
                    } else {
                        request.body.secretary = null;
                    }

                    if (request.body.owner && request.body.owner.id) {
                        const ownerEntity: OwnerEntity | undefined =
                            await ownerService.read(request.body.owner.id, request.payload);

                        if (ownerEntity) {
                            request.body.owner = ownerEntity;
                        } else {
                            request.body.owner = null;
                        }
                    } else {
                        request.body.owner = null;
                    }

                    if (request.body.customer && request.body.customer.id) {
                        const customerEntity: CustomerEntity | undefined =
                            await customerService.read(request.body.customer.id, request.payload);

                        if (customerEntity) {
                            request.body.customer = customerEntity;
                        } else {
                            request.body.customer = null;
                        }
                    } else {
                        request.body.customer = null;
                    }

                    if (request.body.property && request.body.property.id) {
                        const propertyEntity: PropertyEntity | undefined =
                            await propertyService.read(request.body.property.id, request.payload);

                        if (propertyEntity) {
                            request.body.property = propertyEntity;
                        } else {
                            request.body.property = null;
                        }
                    } else {
                        request.body.property = null;
                    }

                    if (request.body.lead && request.body.lead.id) {
                        const leadEntity: LeadEntity | undefined =
                            await leadService.read(request.body.lead.id);

                        if (leadEntity) {
                            request.body.lead = leadEntity;
                        } else {
                            request.body.lead = null;
                        }
                    } else {
                        request.body.lead = null;
                    }

                    const businessEntity: BusinessEntity =
                        await businessService.create(request.body, transaction);

                    return response.status(201).json(businessEntity);
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[0]}` });
                }
            } catch (error: any) {
                return response.status(500).json({ message: error.message });
            }
        });
    }

    public async read(request: Request, response: Response): Promise<Response> {
        try {
            const businessService: BusinessService =
                new BusinessService();

            if (Number(request.params.id)) {
                const businessEntity: BusinessEntity | undefined =
                    await businessService.read(Number(request.params.id));

                return response.status(200).json(businessEntity);
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const businessService: BusinessService =
                    new BusinessService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await businessService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const result: boolean =
                            businessService.validateData(request.body);

                        if (result) {
                            const businessEntity: BusinessEntity =
                                await businessService.update(Number(request.params.id), request.body, transaction);

                            return response.status(200).json(businessEntity);
                        } else {
                            return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[0]}` });
                        }
                    } else {
                        return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[1]}` });
                    }
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
                }
            } catch (error: any) {
                return response.status(500).json({ message: error.message });
            }
        });
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const businessService: BusinessService =
                    new BusinessService();

                if (Number(request.params.id)) {
                    const deleteResult: DeleteResult =
                        await businessService.delete(Number(request.params.id), transaction);

                    return response.status(200).json({ business: deleteResult.affected });
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
                }
            } catch (error: any) {
                return response.status(500).json({ message: error.message });
            }
        });
    }

    public async transferBusinessToManager(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const businessService: BusinessService =
                    new BusinessService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await businessService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const updateResult: UpdateResult =
                            await businessService.transferBusinessToManager(Number(request.params.id), request.body.manager, transaction);

                        return response.status(200).json({ business: updateResult.affected });
                    } else {
                        return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[1]}` });
                    }
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
                }
            } catch (error: any) {
                return response.status(500).json({ message: error.message });
            }
        });
    }

    public async transferBusinessToAdvisor(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const businessService: BusinessService =
                    new BusinessService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await businessService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const updateResult: UpdateResult =
                            await businessService.transferBusinessToAdvisor(Number(request.params.id), request.body.advisor, transaction);

                        return response.status(200).json({ business: updateResult.affected });
                    } else {
                        return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[1]}` });
                    }
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
                }
            } catch (error: any) {
                return response.status(500).json({ message: error.message });
            }
        });
    }

    public async transferBusinessToBroker(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const businessService: BusinessService =
                    new BusinessService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await businessService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const updateResult: UpdateResult =
                            await businessService.transferBusinessToBroker(Number(request.params.id), request.body.broker, transaction);

                        return response.status(200).json({ business: updateResult.affected });
                    } else {
                        return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[1]}` });
                    }
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
                }
            } catch (error: any) {
                return response.status(500).json({ message: error.message });
            }
        });
    }

    public async rejectBusiness(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const businessService: BusinessService =
                    new BusinessService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await businessService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const updateResult: UpdateResult =
                            await businessService.rejectBusiness(Number(request.params.id), transaction);

                        return response.status(200).json({ business: updateResult.affected });
                    } else {
                        return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[1]}` });
                    }
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
                }
            } catch (error: any) {
                return response.status(500).json({ message: error.message });
            }
        });
    }

    public async closeBusiness(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const businessService: BusinessService =
                    new BusinessService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await businessService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const updateResult: UpdateResult =
                            await businessService.closeBusiness(Number(request.params.id), transaction);

                        return response.status(200).json({ business: updateResult.affected });
                    } else {
                        return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[1]}` });
                    }
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
                }
            } catch (error: any) {
                return response.status(500).json({ message: error.message });
            }
        });
    }

    public async amount(request: Request, response: Response): Promise<Response> {
        try {
            const businessService: BusinessService =
                new BusinessService();

            if (request.query.month) {
                const result: any =
                    await businessService.calculateTotalAmountBusinesses(String(request.query.month), request.payload);

                return response.status(200).json(result);
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[0]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async upload(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.query.id;
            const CNPJ = request.payload.company.CNPJ;
            const filename = request.file?.originalname;
            const path = `public/uploads/businesses/${CNPJ}/${id}/${filename}`;

            return response.status(200).json({ path: path });
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async download(request: Request, response: Response): Promise<any> {
        try {
            const path = request.query.path;

            return response.status(200).download(`${path}`);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

}