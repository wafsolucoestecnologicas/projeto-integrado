"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_class_1 = require("../../utils/classes/jwt.class");
var utils_1 = require("../../utils/utils");
function authenticationMiddleware(request, response, next) {
    try {
        var result = (0, utils_1.validateURLWithoutAuthentication)(request.url, request.method);
        if (result) {
            next();
        }
        else if (!request.headers.authorization) {
            return response.status(401).json({ message: utils_1.statusMessages[401] });
        }
        else {
            var token = request.headers.authorization.replace('Bearer', '').trim();
            var data = jwt_class_1.JWT.checkToken(token);
            request.payload = data;
            next();
        }
    }
    catch (e) {
        return response.status(500).json({ message: e.message });
    }
}
;
exports.default = authenticationMiddleware;
//# sourceMappingURL=authentication.middleware.js.map