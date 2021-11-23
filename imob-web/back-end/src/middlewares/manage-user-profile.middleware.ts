import { Request, Response, NextFunction } from 'express';
import { validateURLWithoutAuthentication, statusMessages } from '../../utils/utils';

function getController(method: string, url: string): string {
    let controller: string = '';

    const paths: string[] = url.split('/');
    const hasBarWithId: boolean = Number(paths[2]) ? true : false;

    if (hasBarWithId) {
        url = paths.map((path: string, index: number) => {
            if (index <= 1) {
                return path;
            }
        }).join('/');

        url = url.substring(0, url.length - 1);
    }

    const amountOfBars: number = url.match(/\//g)?.length || 0;

    if (amountOfBars === 1) {
        switch (method) {
            case 'GET':
                controller = 'read';
                break;

            case 'POST':
                controller = 'create';
                break;

            case 'PUT':
                controller = 'update';
                break;

            case 'DELETE':
                controller = 'delete';
                break;
        }
    } else if (amountOfBars > 1) {
        const hasQueryString: boolean = url.includes('?');

        if (hasQueryString) {
            const paths: string[] = url.split('/');
            const path: string[] = paths[2].split('?');

            controller = path[0];
        } else {
            controller = url.split('/')[2];
        }
    }

    return controller;
}

function getEntity(url: string): string {
    return url.split('/')[1];
}

function checkForPermission(controller: string, entity: string, permissions: { [key: string]: string[] }): boolean {
    let permission: boolean = false;

    for (const key in permissions) {
        if (key === controller) {
            const elements: string[] = permissions[key];

            for (let index = 0; index < elements.length; index++) {
                const value: string = elements[index];

                if (value === entity) {
                    permission = true;

                    break;
                }
            }

            break;
        }
    }

    return permission;
}

function managerUserProfile(request: Request, response: Response, next: NextFunction): Response | void {
    const result: boolean =
        validateURLWithoutAuthentication(request.url, request.method);

    if (result) {
        next();
    } else {
        const permissions: { [key: string]: string[] } = request.payload.permissions;
        const controller: string = getController(request.method, request.url);
        const entity: string = getEntity(request.url);

        if (checkForPermission(controller, entity, permissions)) {
            next();
        } else {
            return response.status(401).json({ message: statusMessages[401] })
        }
    }
}

export default managerUserProfile;