import express from 'express';
import controller from '../controllers/raceController';
//import { Race } from '../database/models/race.model';



const router = express.Router();

router.get('/get/races', controller.getALlRaces);
router.post('/add/race', controller.addRace);
router.get('/get/race/:id', controller.getRaceById);
router.put('/update/race/:id', controller.updateRaceById);


export {router as raceRouter}