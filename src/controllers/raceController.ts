import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import { Race } from '../database/models/race.model';
import { Connect,  Query} from '../config/mysql';

const NAMESPACE = "RACE";

const addRace = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "Getrting all races");
    let { id, name, maxAge, minAge, speed, description } = req.body
    let query = `Insert Into Race (id, name, maxAge, minAge, speed, description) VALUES ("${id}", "${name}", "${maxAge}","${minAge}", "${speed}", "${description}" )`;
    Connect()
    .then(connection => {
        Query(connection, query)
        .then(result => {
            return res.status(200).json({
                result
            })
        })
        .catch(error => {
            logging.error(NAMESPACE, error.message, error);
            return res.status(500).json({
                message: error.message,
                error
            });
        })
        .finally(() => {
            connection.end();
        })
    })
    .catch(error => {
        logging.error(NAMESPACE, error.message, error);
        return res.status(500).json({
            message: error.message,
            error
        })
    });
};

const getALlRaces = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "Getrting all races");

    let query = 'SELECT * FROM Race';
    Connect()
    .then(connection => {
        Query(connection, query)
        .then(results => {
            return res.status(200).json({
                results
            })
        })
        .catch(error => {
            logging.error(NAMESPACE, error.message, error);
            return res.status(500).json({
                message: error.message,
                error
            });
        })
        .finally(() => {
            connection.end();
        })
    })
    .catch(error => {
        logging.error(NAMESPACE, error.message, error);
        return res.status(500).json({
            message: error.message,
            error
        })
    });
  
};

const getRaceById = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "Getting this race");
    let id = req.params.id;
    let query = `SELECT * FROM Race WHERE id=${req.params.id}`;
    Connect()
    .then(connection => {
        Query(connection, query)
        .then(results => {
            return res.status(200).json({
                results
            })
        })
        .catch(error => {
            logging.error(NAMESPACE, error.message, error);
            return res.status(500).json({
                message: error.message,
                error
            });
        })
        .finally(() => {
            connection.end();
        })
    })
    .catch(error => {
        logging.error(NAMESPACE, error.message, error);
        return res.status(500).json({
            message: error.message,
            error
        })
    });
  
};

const updateRaceById = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, "Getting this race");
    let { id, name, maxAge, minAge, speed, description } = req.body
    let query = `UPDATE Race SET (name, maxAge, minAge, speed, description) VALUES ("${name}", "${maxAge}", "${minAge}", "${speed}", "${description}")WHERE id=${ req.params.id}`;
    Connect()
    .then(connection => {
        Query(connection, query)
        .then(results => {
            return res.status(200).json({
                results
            })
        })
        .catch(error => {
            logging.error(NAMESPACE, error.message, error);
            return res.status(500).json({
                message: error.message,
                error
            });
        })
        .finally(() => {
            connection.end();
        })
    })
    .catch(error => {
        logging.error(NAMESPACE, error.message, error);
        return res.status(500).json({
            message: error.message,
            error
        })
    });
  
};




export default { addRace, getALlRaces, getRaceById, updateRaceById };
