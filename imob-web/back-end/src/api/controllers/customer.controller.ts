import { DeleteResult } from 'typeorm';
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
                await customerService.index();

            return response.status(200).json(customerEntity);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const customerService: CustomerService =
                new CustomerService();

            const result: boolean =
                customerService.validateData(request.body);

            if (result) {
                const result: boolean =
                    await customerService.alreadyRegisterByCpf(request.body.cpf);

                if (!result) {
                    const customerEntity: CustomerEntity =
                        await customerService.create(request.body);

                    return response.status(201).json(customerEntity);
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[3]}` });
                }
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[0]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async read(request: Request, response: Response): Promise<Response> {
        try {
            const customerService: CustomerService =
                new CustomerService();

            if (Number(request.params.id)) {
                const customerEntity: CustomerEntity | undefined =
                    await customerService.read(Number(request.params.id));

                return response.status(200).json(customerEntity);
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
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
                            await customerService.update(Number(request.params.id), request.body);

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
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        try {
            const customerService: CustomerService =
                new CustomerService();

            if (Number(request.params.id)) {
                const deleteResult: DeleteResult =
                    await customerService.delete(Number(request.params.id));

                return response.status(200).json({ manager: deleteResult.affected });
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

}