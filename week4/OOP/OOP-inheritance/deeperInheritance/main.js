class Teacher{
    constructor(name, startYear, salary) {
        this.name = name 
        this.salary = salary
        this.startYear = startYear
        this.courses = {} //override the courses attribute
    }

    addCourse(course) {
        if (this.courses[course]) {
            return this.courses[course]++
        }
        this.courses[course] = 1
    }
}


class TeachingAssistant extends Teacher {
    constructor(name, startYear, salary) {
        super(name, startYear, salary)
    }
}

const s1 = new Student("Ronda", 2017)
const ta1 = new TeachingAssistant("Brandon", 2014, 20000)

ta1.addCourse("General Relativity")
ta1.giveGrade(s1, "General Relativity", 91)

console.log(ta1.salary) //prints 20000
console.log(ta1.courses) //prints {"General Relativity": 1}
console.log(s1.grades) //prints [{course: "General Relativity", grade: 91}]