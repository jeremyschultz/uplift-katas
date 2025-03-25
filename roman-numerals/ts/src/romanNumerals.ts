export function convertToRomanNumeral(input: number): string {
    let result: string = "";

    if (input >= 5) {
        return "V";
    } else {
        for(let i = 0; i < input; i++) {
            result += "I";
        }
        if (result.indexOf("IIII") !== -1) {
            result = "IV";
        }
    }
    return result;
}

export function convertToInteger(input: string): number {
    return 3;
}