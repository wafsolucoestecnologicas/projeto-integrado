"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils/utils");
function getController(method, url) {
    var _a;
    var controller = '';
    var paths = url.split('/');
    var hasBarWithId = Number(paths[2]) ? true : false;
    if (hasBarWithId) {
        url = paths.map(function (path, index) {
            if (index <= 1) {
                return path;
            }
        }).join('/');
        url = url.substring(0, url.length - 1);
    }
    var amountOfBars = ((_a = url.match(/\//g)) === null || _a === void 0 ? void 0 : _a.length) || 0;
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
    }
    else if (amountOfBars > 1) {
        var hasQueryString = url.includes('?');
        if (hasQueryString) {
            var paths_1 = url.split('/');
            var path = paths_1[2].split('?');
            controller = path[0];
        }
        else {
            controller = url.split('/')[2];
        }
    }
    return controller;
}
function getEntity(url) {
    return url.split('/')[1];
}
function checkForPermission(controller, entity, permissions) {
    var permission = false;
    for (var key in permissions) {
        if (key === controller) {
            var elements = permissions[key];
            for (var index = 0; index < elements.length; index++) {
                var value = elements[index];
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
function managerUserProfile(request, response, next) {
    var result = (0, utils_1.validateURLWithoutAuthentication)(request.url, request.method);
    if (result) {
        next();
    }
    else {
        var permissions = request.payload.permissions;
        var controller = getController(request.method, request.url);
        var entity = getEntity(request.url);
        if (checkForPermission(controller, entity, permissions)) {
            next();
        }
        else {
            return response.status(401).json({ message: utils_1.statusMessages[401] });
        }
    }
}
exports.default = managerUserProfile;
//# sourceMappingURL=manage-user-profile.middleware.js.map