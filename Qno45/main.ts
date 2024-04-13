// Qno #45 

interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; 
}

function moduleCar(manufacturer: string, model: string, 
    ...options: [string, any][]): Car 
{
    const car: Car = 
    {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(option => 
        {
        const [key, value] = option;
        car[key] = value;
        }
    );
    return car;
}
const myCar = moduleCar("Toyota", "Corolla", ["color", "black"], ["year", 2022]);

console.log(myCar);