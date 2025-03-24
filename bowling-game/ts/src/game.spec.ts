import {BowlingGame} from "./game";

describe("Bowling game", () => {
    let game: BowlingGame;

    beforeEach(() => {
        game = new BowlingGame;
    })
    test("with no bowls", () => {
        expect(game.getScore()).toBe(0);
    });

    test("with all gutter balls", () => {
        for(let i: number = 0; i < 20; i++) {
            game.roll(0);
        }

        expect(game.getScore()).toBe(0);
    });

    test("with one open frame", () => {
        game.roll(5);
        game.roll(4);
        for(let i: number = 0; i < 18; i++) {
            game.roll(0);
        }

        expect(game.getScore()).toBe(9);
    });

    test("with one spare", () => {
        game.roll(5);
        game.roll(5);
        game.roll(5);
        for(let i: number = 0; i < 17; i++) {
            game.roll(0);
        }

        expect(game.getScore()).toBe(20);
    });

    test("with one strike", () => {
        game.roll(10);
        game.roll(5);
        game.roll(4);
        for(let i: number = 0; i < 17; i++) {
            game.roll(0);
        }

        expect(game.getScore()).toBe(28);
    });

    test("with perfect game (12 strikes)", () => {
        for(let i: number = 0; i < 12; i++) {
            game.roll(10);
        }

        expect(game.getScore()).toBe(300);
    });
});