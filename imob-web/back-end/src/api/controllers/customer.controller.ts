import { DeleteResult, EntityManager, getManager } from 'typeorm';
import { Request, Response } from 'express';
import { CustomerEntity } from '../entities/customer.entity';
import { CustomerService } from '../services/customer.service';
import { returnMessages, statusMessages } from '../../../utils/utils';

export class CustomerController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const customerService: CustomerService =
                new CustomerService();

            const customerEntity: CustomerEntity[] =
                await customerService.index(request.payload);

            return response.status(200).json(customerEntity);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const customerService: CustomerService =
                    new CustomerService();
    
                const result: boolean =
                    customerService.validateData(request.body);
    
                if (result) {
                    const result: boolean =
                        await customerService.alreadyRegisterByCPF(request.body.cpf);
    
                    if (!result) {
                        request.body.company = request.payload.company;
                        
                        const customerEntity: CustomerEntity =
                            await customerService.create(request.body, transaction);
    
                        return response.status(201).json(customerEntity);
                    } else {
                        return response.status(409).json({ message: `${statusMessages[409]} ${returnMessages[3]}` });
                    }
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
            const customerService: CustomerService =
                new CustomerService();

            if (Number(request.params.id)) {
                const customerEntity: CustomerEntity | undefined =
                    await customerService.read(Number(request.params.id), request.payload);

                return response.status(200).json(customerEntity);
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
                const customerService: CustomerService =
                    new CustomerService();
    
                if (Number(request.params.id)) {
                    const result: boolean =
                        await customerService.alreadyRegisterById(Number(request.params.id));
    
                    if (result) {
                        const result: boolean =
                            customerService.validateData(request.body);
    
                        if (result) {
                            const customerEntity: CustomerEntity =
                                await customerService.update(Number(request.params.id), request.body, transaction);
    
                            return response.status(200).json(customerEntity);
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
                const customerService: CustomerService =
                    new CustomerService();
    
                if (Number(request.params.id)) {
                    const deleteResult: DeleteResult =
                        await customerService.delete(Number(request.params.id), transaction);
    
                    return response.status(200).json({ customer: deleteResult.affected });
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
                }
            } catch (error: any) {
                return response.status(500).json({ message: error.message });
            }
        });
    }

}