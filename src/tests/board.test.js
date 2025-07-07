import GameBoard from "../gameboard.js"
import Ship from "../ship.js"
describe("Game Board", () => {
  let testBoard = new GameBoard()
  test("It exists", () => {
    expect(testBoard).toBeDefined()
  })

  test("It has a width and height", () => {
    expect(testBoard.width).toBeDefined()
    expect(testBoard.height).toBeDefined()

  })

  test("Ships can be placed", () => {
    let testBoard = new GameBoard(5,5)

    expect(testBoard.placeShip(1, 1, 3, "right")).toBe(true)

    expect(testBoard.placeShip(1, 1, 3, "left")).toBe(false)
  })
  test("Board spaces can be checked for an occupying ship", () => {
    let testBoard = new GameBoard(5,5)
    testBoard.placeShip(1, 1, 3, "right")

    expect(testBoard.shipAt(2,1)).toBeTruthy()
    expect(testBoard.shipAt(2, 2)).toBeFalsy()
  })
})