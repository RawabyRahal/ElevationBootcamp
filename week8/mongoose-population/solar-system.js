const mongoose = require('mongoose')
const { populate } = require('../mongoose-practice/Person')

mongoose.connect("mongodb://127.0.0.1:27017/solarSystemDB", {
    useNewUrlParser: true,
}).catch((err) => console.log(err))

const Schema = mongoose.Schema

const solarSysSchema = new Schema({
    starName: String,
    planets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }]
})

const palnetSchema = new Schema({
    name: String,
    system: { type: Schema.Types.ObjectId, ref: 'SolarSystem' },
    visitors: [{ type: Schema.Types.ObjectId, ref: 'Visitor' }]
})

const visitorSchema = new Schema({
    name: String,
    homePlanet: { type: Schema.Types.ObjectId, ref: 'Planet' },
    visitedPlanets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }]
})

const Planet = mongoose.model("Planet", palnetSchema)
const SolarSystem = mongoose.model("SolarSystem", solarSysSchema)
const Visitor = mongoose.model("Visitor", visitorSchema)



// Find a visitor’s list of visited planets
Visitor.findOne({})
    .populate('visitedPlanets')
    .exec()
    .then(function (planet) {
        // console.log(planet.visitors)
    })

// Find all the visitors on a planet
Planet.findOne({})
    .populate('visitors')
    .exec()
    .then(function (planet) {
        console.log(planet.visitors)
    })

// Find all the visitors in a system (subdocuments!)
SolarSystem.findOne({})
    .populate({
        path: 'planets',
        populate: {
            path: 'visitors'
        }
    })
    .exec()
    .then(function (solarSystem) {
        const visitors = []
        solarSystem.planets.forEach(planet => visitors.push(...planet.visitors))
        // console.log(visitors)
    })
    

module.exports = {
    Planet,
    SolarSystem,
    Visitor
}