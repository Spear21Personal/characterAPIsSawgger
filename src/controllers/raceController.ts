import { NextFunction, Request, Response } from 'express';
import logging from '../config/logging';
import { Race } from '../database/models/race.model';
import { Connect,  Query} from '../config/mysql';

const NAMESPACE = "RACE";

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



export default { getALlRaces };
