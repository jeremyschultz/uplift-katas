import {BowlingGame} from "./game";

describe("Bowling game", () => {
    let game: BowlingGame;

    beforeEach(() => {
        game = new BowlingGame();
    })    

    test("with no bowls", () => {
        expect(game.getScore()).toEqual(0);
    });

    test("with all gutter balls", () => {
        for(let i = 0; i < 20; i++) {
            game.rollHandler(0);
        }
        expect(game.getScore()).toEqual(0);
    });

    test("with one open frame", () => {
        game.rollHandler(3);
        game.rollHandler(5);
        for(let i = 0; i < 18; i++) {
            game.rollHandler(0);
        }

        expect(game.getScore()).toEqual(8);
    });

    test("with one spare", () => {
        game.rollHandler(5);
        game.rollHandler(5);
        game.rollHandler(5);
        for(let i = 0; i < 17; i++) {
            game.rollHandler(0);
        }

        expect(game.getScore()).toEqual(20);
    });

    test("with one strike", () => {
        game.rollHandler(10);
        game.rollHandler(3);
        game.rollHandler(5);
        for(let i = 0; i < 17; i++) {
            game.rollHandler(0);
        }

        expect(game.getScore()).toEqual(26);
    });

    test("with perfect game", () => {
        for(let i = 0; i < 12; i++) {
            game.rollHandler(10);
        }

        expect(game.getScore()).toEqual(300);
    })
});