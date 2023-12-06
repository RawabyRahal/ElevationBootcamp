class Vehicle{
    Vehicle.carsSold = 0;
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        Vehicle.carsSold++;
    }

    static getInfo() {
        console.log("We've sold " + Vehicle.carsSold + " vehicles.");
    }
    static calculateMoney(){
        let result = Vehicle.carsSold * 30000
        console.log("the total is: " + result)
    }
}

Vehicle.calculateMoney()