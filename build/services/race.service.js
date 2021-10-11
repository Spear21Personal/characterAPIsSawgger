"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaceService = void 0;
class RaceService {
    get(id, name) {
        return {
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
        };
    }
}
exports.RaceService = RaceService;
