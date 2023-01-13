const Car = require("./Car");
const Dealership = require("./Dealership");

let dealership;
beforeEach(() => {
    dealership = new Dealership("Brava Dealers", 20)

    dealership.addCarToStock(new Car("Kia", 2500, "Deisel"));
    dealership.addCarToStock(new Car("Vauxhall", 2000, "Petrol"));
    dealership.addCarToStock(new Car("Fiat", 10_000,"Hybrid" ));
    dealership.addCarToStock(new Car("Mini Cooper", 15_000,"Petrol" ));
    dealership.addCarToStock(new Car("BMW", 20_000,"Electric" ));
});

describe("Dealership method tests", () => {
test ('countNumberOfCars', () => {
    const exp = 5;
    const act = dealership.noOfCarsInStock();
    expect(exp).toBe(act);
});


});