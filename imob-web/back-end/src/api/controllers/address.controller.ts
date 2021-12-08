import { DeleteResult, EntityManager, getManager } from 'typeorm';
import { Request, Response } from 'express';
import { AddressEntity } from '../entities/address.entity';
import { AddressService } from '../services/address.service';
import { ResponseViaCEPModel } from '../models/address.model';
import { returnMessages, statusMessages } from '../../../utils/utils';

export class AddressController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const addressService: AddressService =
                new AddressService();

            const addressEntity: AddressEntity[] =
                await addressService.index();

            return response.status(200).json(addressEntity);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        return await getManager().transaction(async (transaction: EntityManager) => {
            try {
                const addressService: AddressService =
                    new AddressService();

                const result: boolean =
                    addressService.validateData(request.body);

                if (result) {
                    request.body.company = request.payload.company;

                    if (request.body.isManager && request.payload.isManager)
                        request.body.manager = request.payload?.manager;

                    if (request.body.isAdvisor && request.payload.isAdvisor)
                        request.body.advisor = request.payload?.advisor;

                    if (request.body.isBroker && request.payload.isBroker)
                        request.body.broker = request.payload?.broker;

                    if (request.body.isSecretary && request.payload.isSecretary)
                        request.body.secretary = request.payload?.secretary;

                    const addressEntity: AddressEntity =
                        await addressService.create(request.body, transaction);

                    return response.status(201).json(addressEntity);
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
            const addressService: AddressService =
                new AddressService();

            if (Number(request.params.id)) {
                const addressEntity: AddressEntity | undefined =
                    await addressService.read(Number(request.params.id));

                return response.status(200).json(addressEntity);
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
                const addressService: AddressService =
                    new AddressService();

                if (Number(request.params.id)) {
                    const result: boolean =
                        await addressService.alreadyRegisterById(Number(request.params.id));

                    if (result) {
                        const result: boolean =
                            addressService.validateData(request.body);

                        if (result) {
                            const addressEntity: AddressEntity | undefined =
                                await addressService.update(Number(request.params.id), request.body, transaction);

                            return response.status(200).json(addressEntity);
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
                const addressService: AddressService =
                    new AddressService();

                if (Number(request.params.id)) {
                    const deleteResult: DeleteResult =
                        await addressService.delete(Number(request.params.id), transaction);

                    return response.status(200).json({ address: deleteResult.affected });
                } else {
                    return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
                }
            } catch (error: any) {
                return response.status(500).json({ message: error.message });
            }
        });
    }

    public async searchAddressInAPIViaCEP(request: Request, response: Response): Promise<Response> {
        try {
            const addressService: AddressService =
                new AddressService();

            if (request.query.CEP) {
                const responseViaCEP: ResponseViaCEPModel =
                    await addressService.fetchAddressInAPIViaCEP(String(request.query.CEP));

                return response.status(200).json(responseViaCEP);
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[0]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

}