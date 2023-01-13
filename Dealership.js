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
     this.carsInStock.push(car);
    }
};

Dealership.prototype.getManufacturers = function () {
    return this.carsInStock.map();
};

module.exports = Dealership;