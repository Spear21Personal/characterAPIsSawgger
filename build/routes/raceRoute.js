"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.raceRouter = void 0;
const express_1 = __importDefault(require("express"));
const raceController_1 = __importDefault(require("../controllers/raceController"));
const router = express_1.default.Router();
exports.raceRouter = router;
router.get('/get/races', raceController_1.default.getALlRaces);
router.post('/add/race', raceController_1.default.addRace);
router.get('/get/race/:id', raceController_1.default.getRaceById);
router.put('/update/race/:id', raceController_1.default.updateRaceById);
