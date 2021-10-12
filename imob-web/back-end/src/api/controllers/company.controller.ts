import { Request, Response } from 'express';
import { DeleteResult } from 'typeorm';
import { CompanyModel } from '../models/company.model';
import { CompanyService } from '../services/company.service';
import { statusMessages, returnMessages } from '../../../utils/utils';

export class CompanyController {

    constructor() { }

    public async index(request: Request, response: Response): Promise<Response> {
        try {
            const companyService: CompanyService =
                new CompanyService();

            const companyModel: CompanyModel[] =
                await companyService.index();

            return response.status(200).json(companyModel);
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async create(request: Request, response: Response): Promise<Response> {
        try {
            const companyService: CompanyService =
                new CompanyService();

            const result: boolean =
                companyService.validateData(request.body);

            if (result) {
                const result: boolean =
                    await companyService.alreadyRegisteredByCnpj(request.body.cnpj);

                if (!result) {
                    const companyModel: CompanyModel =
                        await companyService.create(request.body);

                    return response.status(201).json(companyModel);
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
            const companyService: CompanyService =
                new CompanyService();

            if (Number(request.params.id)) {
                const companyModel: CompanyModel | undefined =
                    await companyService.read(Number(request.params.id));

                return response.status(200).json(companyModel);
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

    public async update(request: Request, response: Response): Promise<Response> {
        try {
            const companyService: CompanyService =
                new CompanyService();

            if (Number(request.params.id)) {
                const result: boolean =
                    await companyService.alreadyRegisteredById(Number(request.params.id));

                if (result) {
                    const result: boolean =
                        companyService.validateData(request.body);

                    if (result) {
                        const companyModel: CompanyModel =
                            await companyService.udpate(Number(request.params.id), request.body);

                        return response.status(200).json(companyModel);
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
            const companyService: CompanyService =
                new CompanyService();

            if (Number(request.params.id)) {
                const deleteResult: DeleteResult =
                    await companyService.delete(Number(request.params.id));

                return response.status(200).json({ company: deleteResult.affected });
            } else {
                return response.status(400).json({ message: `${statusMessages[400]} ${returnMessages[2]}` });
            }
        } catch (error: any) {
            return response.status(500).json({ message: error.message });
        }
    }

}