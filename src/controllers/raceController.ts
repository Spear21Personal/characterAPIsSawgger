import { NextFunction, Request, Response } from 'express';
import { Race } from '../database/models/race.model';
const raceController = (req: Request, res: Response, next: NextFunction) => {
    res.send('race is ');
    return res.status(200).json({
        message: 'comp-lete',
       
    });
};

export default { raceController };
