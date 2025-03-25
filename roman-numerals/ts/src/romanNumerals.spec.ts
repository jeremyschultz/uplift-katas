import {convertToRomanNumeral, convertToInteger} from "./romanNumerals";

describe("convertToRomanNumeral", () => {
    test("1 to be I", () => {
        expect(convertToRomanNumeral(1)).toEqual("I");
    });
    test("2 to be II", () => {
        expect(convertToRomanNumeral(2)).toEqual("II");
    });
    test("3 to be III", () => {
        expect(convertToRomanNumeral(3)).toEqual("III");
    });
    test("4 to be IV", () => {
        expect(convertToRomanNumeral(4)).toEqual("IV");
    });

    test("5 to be V", () => {
        expect(convertToRomanNumeral(5)).toEqual("V");
    });
});


// Roman Numeral Conversion Chart:
// 1 -> I
// 2 -> II
// 3 -> III
// 4 -> IV
// 5 -> V
// 9 -> IX
// 10 -> X
// 20 -> XX
// 40 -> XL
// 50 -> L
// 90 -> XC
// 100 -> C
// 400 -> CD
// 500 -> D
// 900 -> CM
// 1000 -> M





