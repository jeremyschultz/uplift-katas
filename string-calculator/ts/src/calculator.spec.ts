import {StringCalculator} from "./calculator";

describe("String Calculator", () => {
    const calc = new StringCalculator;

    test("1. adds string numbers", () => {
        expect(calc.add("")).toEqual(0);
        expect(calc.add("3")).toEqual(3);
        expect(calc.add("5,11")).toEqual(16);
    });

    test("2. adds any amount of string numbers", () => {
        expect(calc.add("1,2,3")).toEqual(6);
        expect(calc.add("1,2,3,9,3,4,2,4,3,3")).toEqual(34);
    });

    test("3. allows newlines and/or comma separators", () => {
        expect(calc.add("5\n11")).toEqual(16);
        expect(calc.add("3,17\n12")).toEqual(32);
    });

    test("4. allows user-defined delimiters, one char", () => {
        expect(calc.add("//c\n3c11")).toEqual(14);
        expect(calc.add("//;\n3;17\n12,2")).toEqual(34);
    });

    test("5. disallows negative numbers", () => {
        expect(calc.add("3,-11")).toEqual("negatives not allowed");
        expect(calc.add("-1")).toEqual("negatives not allowed");
        expect(calc.add("//;\n12;-1")).toEqual("negatives not allowed");
    });

    test("6. ignores numbers > 1000", () => {
        expect(calc.add("2,1001")).toEqual(2);
    });

    test("7. allows user-defined delimiters > 1 char, in brackets", () => {
        expect(calc.add("//[***]\n1***2***3")).toEqual(6);
    });

    test("8. allows multiple user-defined delimiters, 1 char, in brackets", () => {
        expect(calc.add("//[*][%]\n1*2%3")).toEqual(6);
    });

    test("9. allows multiple user-defined delimiters > 1 char, in brackets", () => {
        expect(calc.add("//[*][%]\n1*2%3")).toEqual(6);
    });

});

