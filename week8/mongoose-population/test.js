
const {Planet, SolarSystem, Visitor} = require("./solar-system.js");


function initDB() {
    const theCopernicanSystem = new SolarSystem({
        name: "The Copernican System",
        planets: [],
        starName: "Sun"
    });
    
    const planets = [
        new Planet({
            name: "Mercury",
            system: theCopernicanSystem,
            visitors: []
        }),
        new Planet({
            name: "Venus",
            system: theCopernicanSystem,
            visitors: []
        }),
        new Planet({
            name: "Earth",
            system: theCopernicanSystem,
            visitors: []
        }),
        new Planet({
            name: "Mars",
            system: theCopernicanSystem,
            visitors: []
        }),
        new Planet({
            name: "Jupiter",
            system: theCopernicanSystem,
            visitors: []
        }),
        new Planet({
            name: "Saturn",
            system: theCopernicanSystem,
            visitors: []
        }),
        new Planet({
            name: "Uranus",
            system: theCopernicanSystem,
            visitors: []
        }),
        new Planet({
            name: "Neptune",
            system: theCopernicanSystem,
            visitors: []
        })
    ]
    const [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune] = planets;
    
    const visitors = [
        new Visitor({
            name: "Ramadan Jaafari",
            homePlanet: neptune,
            visitedPlanets: [saturn, mars, earth, neptune]
        }), new Visitor({
            name: "Rawabi Rahal",
            homePlanet: mars,
            visitedPlanets: [mercury, venus, earth, jupiter, uranus, mars]
        }), new Visitor({
            name: "Ameer Jamal",
            homePlanet: earth,
            visitedPlanets: [venus, earth]
        }),
        new Visitor({
            name: "Mohammed Naarani",
            homePlanet: saturn,
            visitedPlanets: planets
        })
    ]
    const [ramadan, rawabi, ameer, mhmd] = visitors;
    


    theCopernicanSystem.planets = planets;

    mercury.visitors.push(rawabi, mhmd);
    venus.visitors.push(rawabi, ameer, mhmd);
    earth.visitors.push(...visitors);
    mars.visitors.push(ramadan, rawabi, mhmd);
    jupiter.visitors.push(rawabi, mhmd);
    saturn.visitors.push(ramadan, mhmd);
    uranus.visitors.push(rawabi, mhmd);
    neptune.visitors.push(ramadan, mhmd);

    theCopernicanSystem.save();
    planets.forEach(planet => planet.save());
    visitors.forEach(visitor => visitor.save());
}

initDB();