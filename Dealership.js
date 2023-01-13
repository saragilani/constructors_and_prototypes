const Car = require("./Car");

const Dealership = function (name, maxCars) {
    this.name = name;
    this.maxCars = maxCars;
    this.carsInStock = [];
};

Dealership.prototype.noOfCarsInStock = function () {
    return this.carsInStock.length;
};

Dealership.prototype.addCarToStock = function (car) {
    if (this.carsInStock.length < this.maxCars){
    return this.carsInStock.push(car);
    }
};

Dealership.prototype.getManufacturerArray = function () {
    return this.carsInStock.map((car) => {
        return car.manufacturer;
    }
)};

Dealership.prototype.findByManufacturer = function (manufacturer) {
    return this.carsInStock.filter((car) => 
    car.manufacturer === manufacturer)
};

Dealership.prototype.stockValue = function () {
    return this.carsInStock.reduce((reducer, car) => reducer +
    car.price, 0)
};




module.exports = Dealership;