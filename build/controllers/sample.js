"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverHealthCheck = (req, res, next) => {
    res.send('plunk');
    return res.status(200).json({
        message: 'pong',
    });
};
exports.default = { serverHealthCheck };
