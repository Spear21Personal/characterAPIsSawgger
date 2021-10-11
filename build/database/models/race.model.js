"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Race = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const raceSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    maxAge: {
        type: Number,
        required: true
    },
    minAge: {
        type: Number,
        required: true
    },
    abilityIncrease: {
        type: [String]
    },
    aligment: {
        type: [String],
        required: true
    },
    speed: {
        type: Number,
        required: true
    },
    history: {
        type: [String],
        required: true
    },
    languages: {
        type: [String],
        required: true
    },
    damageResitance: {
        type: [String],
        required: true
    },
    maleNames: {
        type: [String]
    },
    femaleNames: {
        type: [String]
    },
    clanNames: {
        type: [String]
    },
    subRaces: {
        type: [String]
    }
});
raceSchema.statics.build = (attr) => {
    return new Race(attr);
};
const Race = mongoose_1.default.model('Race', raceSchema);
exports.Race = Race;
Race.build({
    name: 'some name',
    maxAge: 5,
    minAge: 350,
    abilityIncrease: [{ 'strength': 2 }, { 'wisdon': 1 }],
    aligment: ['Good', 'Choatic', 'Neutral'],
    speed: 30,
    history: [],
    languages: ['Common', 'Elvish'],
    damageResitance: [],
    maleNames: ['Adrik', 'Alberich', 'Baern', 'Barendd', 'Brottor',],
    femaleNames: ['Amber', 'Artin', 'Audhild', 'Bardryn', 'Dagnal', 'Diesa', 'Eldeth', 'Falkrunn'],
    clanNames: ['Balderk', 'Battlehammer', 'Brawnanvil', 'Dankil', 'Fireforge', 'Frostbeard', 'Gorunn', 'Holderhek', 'Ironfist', 'Loderr', 'Lutgehr', 'Rumnaheim', 'Strakeln', 'Torunn', 'Ungart'],
    subRaces: ['Hill Dwarf', 'Mountain Dwarf'],
});
