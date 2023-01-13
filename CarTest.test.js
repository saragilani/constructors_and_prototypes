const Car = require("./Car");

let car;

beforeEach(() => {
    car = new Car("Toyota", 10_000, "RAF4");
});

test("getManufacturer", () => {
    expect(car.manufacturer).toBe("Toyota");
})