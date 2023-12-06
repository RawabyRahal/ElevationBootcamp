//write your code here to make the tests pass

class Document {
    constructor(EmployeeName) {
        this.EmployeeName = EmployeeName
    }
}

class Employee {
    constructor(name) {
        this.name = name
    }

    work(office) {
        for (let i = 0; i < 10; i++) {
            const document = new Document(this.name)
            office.documents.push(document)
        }
    }
}

class Manager {
    constructor(name) {
        this.name = name
        this.employees = []
    }
    hireEmployee(name) {
        const newEmployee = new Employee(name)
        this.employees.push(newEmployee)
    }
    askEmployeesToWork(office) {
        for (let i in this.employees) {
            this.employees[i].work(office)
        }
    }
}

class Cleaner {
    constructor(name) {
        this.name = name
    }
    clean() {
        console.log("Clean")
    }
}

class Office {
    constructor() {
        this.documents = []
        this.managers = []
        this.cleaners = []
    }

    hireCleaner(name) {
        const newCleaner = new Cleaner(name)
        this.cleaners.push(newCleaner)
    }
    hireManager(name) {
        const newManager = new Manager(name)
        this.managers.push(newManager)
    }
    startWorkDay() {
        for(let c in this.cleaners){
            this.cleaners[c].clean()
        }

        for(let m in this.managers){
            this.managers[m].askEmployeesToWork(this)
            console.log('test12');
        }
    }
}