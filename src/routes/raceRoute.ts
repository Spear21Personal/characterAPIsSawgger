import express from 'express';
import controller from '../controllers/raceController';
import {connect, disconnect} from '../database/database';
import { Race } from '../database/models/race.model';

const db = connect();

const router = express.Router();

router.get('/', [], async (req:express.Request, res:express.Response) => {
    const races = await Race.find({})
    return res.status(200).send(races)
})

router.post('/', async (req, res) => {
    const raceReq = req.body;
    const race = Race.build(raceReq)
    await race.save()
    return res.status(200).send(race);
})

export {router as raceRouter}