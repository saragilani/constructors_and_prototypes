const Car = require("./Car");
const Dealership = require("./Dealership");

let dealership;
beforeEach(() => {
    dealership = new Dealership("Brava Dealers", 20)

    dealership.addCarToStock(new Car("Kia", 2500, "Diesel"));
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


    test("add a car to stock", () => {
        //ARANGE, ACT
        const car = new Car("Jaguar", 80_000, "Petrol")
        dealership.addCarToStock(car);
        //ASSERT
        const exp = car; 
        const act = dealership.carsInStock[(dealership.carsInStock.length) -1];
        expect(exp).toBe(act);
    });

    test("Return an array containing each car's manufacturer", () => {
        const expected = ["Kia", "Vauxhall", "Fiat", "Mini Cooper", "BMW"]
        const actual = dealership.getManufacturerArray();
        expect(expected).toStrictEqual(actual);
    });

    test("Return cars by manufacturer", () => {
        const expected = [new Car("Kia", 2500, "Diesel")];
        const actual = dealership.findByManufacturer("Kia");
        expect(expected).toStrictEqual(actual);
    });

    test("Total value of cars in stock", () => {
        const expected = 49_500;
        const actual = dealership.stockValue();
        expect(expected).toBe(actual);
    });

});