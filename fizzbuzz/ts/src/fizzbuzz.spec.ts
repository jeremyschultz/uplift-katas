import {fizzbuzz} from "./fizzbuzz";

describe("fizzbuzz", () => {
    test("does not go past 100", () => {
        expect(fizzbuzz(100)).not.toContain("101\n");
    });

    test("prints numbers 1-100 with newlines", () => {
        for (let i of [1, 2, 17, 71]) {
            expect(fizzbuzz(i)).toContain(`${i}\n`);
        }
    });

    test("prints 'fizz' if number is multiple of 3'", () => {
        for (let i of [3, 66, 90]) {
            expect(fizzbuzz(i)).toContain("fizz\n");
        }
    });

    test("prints 'buzz' if number is multiple of 5'", () => {
        for (let i of [10, 50, 95, 100]) {
            expect(fizzbuzz(i)).toContain("buzz\n");
        }
    });

    test("prints 'fizzbuzz' if number is multiple of 3 and 5'", () => {
        for (let i of [15, 30, 75]) {
            expect(fizzbuzz(i)).toContain("fizzbuzz\n");
        }
    });
});