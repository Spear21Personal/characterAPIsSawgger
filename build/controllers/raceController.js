"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = __importDefault(require("../config/logging"));
const mysql_1 = require("../config/mysql");
const NAMESPACE = "RACE";
const addRace = (req, res, next) => {
    logging_1.default.info(NAMESPACE, "Getrting all races");
    let { id, name, maxAge, minAge, speed, description } = req.body;
    let query = `Insert Into Race (id, name, maxAge, minAge, speed, description) VALUES ("${id}", "${name}", "${maxAge}","${minAge}", "${speed}", "${description}" )`;
    mysql_1.Connect()
        .then(connection => {
        mysql_1.Query(connection, query)
            .then(result => {
            return res.status(200).json({
                result
            });
        })
            .catch(error => {
            logging_1.default.error(NAMESPACE, error.message, error);
            return res.status(500).json({
                message: error.message,
                error
            });
        })
            .finally(() => {
            connection.end();
        });
    })
        .catch(error => {
        logging_1.default.error(NAMESPACE, error.message, error);
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
const getALlRaces = (req, res, next) => {
    logging_1.default.info(NAMESPACE, "Getrting all races");
    let query = 'SELECT * FROM Race';
    mysql_1.Connect()
        .then(connection => {
        mysql_1.Query(connection, query)
            .then(results => {
            return res.status(200).json({
                results
            });
        })
            .catch(error => {
            logging_1.default.error(NAMESPACE, error.message, error);
            return res.status(500).json({
                message: error.message,
                error
            });
        })
            .finally(() => {
            connection.end();
        });
    })
        .catch(error => {
        logging_1.default.error(NAMESPACE, error.message, error);
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
const getRaceById = (req, res, next) => {
    logging_1.default.info(NAMESPACE, "Getting this race");
    let id = req.params.id;
    let query = `SELECT * FROM Race WHERE id=${req.params.id}`;
    mysql_1.Connect()
        .then(connection => {
        mysql_1.Query(connection, query)
            .then(results => {
            return res.status(200).json({
                results
            });
        })
            .catch(error => {
            logging_1.default.error(NAMESPACE, error.message, error);
            return res.status(500).json({
                message: error.message,
                error
            });
        })
            .finally(() => {
            connection.end();
        });
    })
        .catch(error => {
        logging_1.default.error(NAMESPACE, error.message, error);
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
const updateRaceById = (req, res, next) => {
    logging_1.default.info(NAMESPACE, "Getting this race");
    let { id, name, maxAge, minAge, speed, description } = req.body;
    let query = `UPDATE Race SET (name, maxAge, minAge, speed, description) VALUES ("${name}", "${maxAge}", "${minAge}", "${speed}", "${description}")WHERE id=${req.params.id}`;
    mysql_1.Connect()
        .then(connection => {
        mysql_1.Query(connection, query)
            .then(results => {
            return res.status(200).json({
                results
            });
        })
            .catch(error => {
            logging_1.default.error(NAMESPACE, error.message, error);
            return res.status(500).json({
                message: error.message,
                error
            });
        })
            .finally(() => {
            connection.end();
        });
    })
        .catch(error => {
        logging_1.default.error(NAMESPACE, error.message, error);
        return res.status(500).json({
            message: error.message,
            error
        });
    });
};
exports.default = { addRace, getALlRaces, getRaceById, updateRaceById };
