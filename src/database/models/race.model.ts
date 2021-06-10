import mongoose from 'mongoose';

 interface IRace {
    name: string,
    maxAge: number,
    minAge: number,
    abilityIncrease: any[],
    aligment: any[],
    speed: number,
    history: any[],
    languages: any[],
    damageResitance: any[],
    maleNames:any[],
    femaleNames: any[],
    clanNames: any[],
    subRaces: any[],
}

interface raceModelInterface extends mongoose.Model<any> {
    build(attr: IRace): any
}

interface RaceDoc extends mongoose.Document {
    name: string,
    maxAge: number,
    minAge: number,
    abilityIncrease: [],
    aligment: [],
    speed: number,
    history: [],
    languages: [],
    damageResitance: [],
    maleNames:[],
    femaleNames: [],
    clanNames: [],
    subRaces: [],
}

const raceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    maxAge:{
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
        type:[String],
        required: true
    },
    speed:{
        type:  Number,
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
    damageResitance:{
        type: [String],
        required: true
    },
    maleNames:{
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

})

raceSchema.statics.build = (attr: IRace) => {
    return new Race(attr)
}

const Race = mongoose.model<any, raceModelInterface>('Race', raceSchema)

Race.build({
    name: 'some name',
    maxAge: 5,
    minAge: 350,
    abilityIncrease: [{'strength': 2}, {'wisdon': 1}],
    aligment: ['Good', 'Choatic', 'Neutral'],
    speed: 30,
    history: [],
    languages: ['Common', 'Elvish'],
    damageResitance: [],
    maleNames:['Adrik', 'Alberich', 'Baern', 'Barendd', 'Brottor',],
    femaleNames: ['Amber', 'Artin', 'Audhild', 'Bardryn', 'Dagnal', 'Diesa', 'Eldeth', 'Falkrunn'],
    clanNames: ['Balderk', 'Battlehammer', 'Brawnanvil', 'Dankil', 'Fireforge', 'Frostbeard', 'Gorunn', 'Holderhek', 'Ironfist', 'Loderr', 'Lutgehr', 'Rumnaheim', 'Strakeln', 'Torunn', 'Ungart' ],
    subRaces: ['Hill Dwarf','Mountain Dwarf'],
})
export{ Race }