let people = [
    { salary: 1300, goodPerformance: false },
    { salary: 1500, goodPerformance: true },
    { salary: 1200, goodPerformance: true },
    { salary: 1700, goodPerformance: false },
    { salary: 1600, goodPerformance: true },
]

const updateSalary = people.filter(p => p.goodPerformance == true)

updateSalary.forEach(p => console.log(p.salary + 300)) //should print 1300, 1800, 1500, 1700, 1900 (on separate lines)