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
                    /** @TODO Descomentar a linha abaixo após os testes com o Postman */
                    /* request.body.company = request.payload.company; */

                    const addressEntity: AddressEntity =
                        await addressService.create(request.body, transaction);

                    return response.status(200).json(addressEntity);
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

            const responseViaCEP: ResponseViaCEPModel =
                await addressService.fetchAddressInAPIViaCEP(request.params.cep);

            return response.status(200).json(responseViaCEP);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

}