import Ship from "./ship";

describe("Ship Class", () => {
  test("It exists", () => {
    expect(new Ship()).toBeDefined();
  });

  test("It starts unsunk", () => {
    expect(new Ship().sunk).toBe(false);
  });
  test("It is constructed with a length", () => {
    expect(new Ship(2).length).toBe(2);
  });

  test("It is constructed with a direction", () => {
    expect(new Ship(2, 0).direction).toBe(0);
  });

  test("It has a position", () => {
    expect(new Ship(2, 0, 5, 5).positionX).toBe(5);
    expect(new Ship(2, 0, 5, 8).positionY).toBe(8);
  });

  test("It can be attacked", () => {
    const testShip = new Ship(2, 0, 5, 5);

    expect(testShip.attack(6, 5)).toBe(true);

    expect(testShip.attack(10, 10)).toBe(false);

    const testShip2 = new Ship(6, 2, 5, 5);

    expect(testShip2.attack(1, 5)).toBe(true);
  });

  test("ships can be sunk", () => {
    const testShip = new Ship(3, 0, 0, 0);

    testShip.attack(0, 0);
    testShip.attack(1, 0);
    testShip.attack(2, 0);

    testShip.sunk = true;
  });
  test("cant hit a ship a more than once in 1 spot", () => {
    const testShip = new Ship(3, 0, 0, 0);

    testShip.attack(2, 0);
    testShip.attack(2, 0);
    testShip.attack(2, 0);

    testShip.sunk = false;
  });
});
