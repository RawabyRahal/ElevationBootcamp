let vegetables = [
    { name: "Eggplant", color: "purple" },
    { name: "Carrot", color: "orange" },
    { name: "Squash", color: "orange" },
    { name: "Tomatoe", color: "red" },
    { name: "Onion", color: "white" },
    { name: "Sweet Potato", color: "orange" }]

const orangeVeg = vegetables.filter(veg => veg.color == 'orange')
console.log(orangeVeg)

orangeVeg.forEach(ov => console.log(ov.name))