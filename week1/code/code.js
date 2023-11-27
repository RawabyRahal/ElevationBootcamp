let txt1 = "Hello";
let txt2 = "World";

function welcome() {
    console.log(txt1 + ", " + txt2 + "!");
}


let x = [
    function func(){
    console.log("Hello")
    },
    function clickMe() {"Click me"},
    button() = function() {
        console.log("Button clicked!");
}];

function addnum(number1, number2) {
    let sum = number1 + number2;
    console.log('Sum is: ' + sum);
}

welcome();
x.button();
addnum(5, 3);


let weather = {
    temp: 24,
    weatherType: "sunny",
    printWeather: function() {
        console.log("It is " + this.weatherType + " and the temperature is " + this.temp + "°C.");
    }
};

weather.printWeather();





