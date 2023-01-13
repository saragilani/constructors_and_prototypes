const Car = require("./Car");
const Dealership = require("./Dealership");

const Customer = function(name, wallet) {
    this.name = name;
    this.wallet = wallet;
    this.car = null;
};

Customer.prototype.buyCar = function (Car, Dealership) {
    if (this.wallet> Car.price)
    this.car = Car;
    Dealership.carsInStock.pop();
}

module.exports = Customer;