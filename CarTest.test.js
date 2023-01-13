const Car = require("./Car");

let car;

beforeEach(() => {
    car = new Car("Toyota", 10_000, "Petrol");
});

describe("Getting properties of Car", () => {
   
    test("getManufacturer", () => {
        expect(car.manufacturer).toBe("Toyota");
    });

    test("getPrice", () => {
        expect(car.price).toBe(10000);
    });

    test("getEngine", () => {
        expect(car.engine).toBe("Petrol");
    });

});