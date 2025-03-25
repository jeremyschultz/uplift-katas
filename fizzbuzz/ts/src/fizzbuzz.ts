export function fizzbuzz(value: number): string {
    let result: string = "";
    for(let i: number = 1; i <= 100; i++) {
        if (isDivBy(i, 15)) {
            result += "fizzbuzz\n";
        } else if (isDivBy(i, 3)) {
            result += "fizz\n";
        } else if (isDivBy(i, 5)) {
            result += "buzz\n";
        } else {
            result += `${i.toString()}\n`;
        }
    }

    return result;
}

function isDivBy(value: number, divisor: number): boolean {
    return value % divisor === 0;
}