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

const t1 = new Teacher("Cassandra", 2002, 40000)
t1.addCourse("Algebra II")
t1.addCourse("Algebra II")
t1.addCourse("Trigonometry")
console.log(t1.courses) //should print {Algebra II: 2, Trigonometry: 1}