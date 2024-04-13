"use strict";
// / Qno #45 
Object.defineProperty(exports, "__esModule", { value: true });
function moduleCar(manufacturer, model, ...options) {
    const car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(option => {
        const [key, value] = option;
        car[key] = value;
    });
    return car;
}
const myCar = moduleCar("Toyota", "Corolla", ["color", "black"], ["year", 2022]);
console.log(myCar);
