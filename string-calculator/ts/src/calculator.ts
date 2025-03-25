export class StringCalculator {

    public add(input: string): number|string {
        if (input.indexOf("-") === -1) {
            let numberArray: string[] = input.split(this.getSplitRegex(input));
            let result: number = 0;

            for (let item of numberArray) {
                const number = Number(item);
                if (number <= 1000) {
                    result += number;
                }
            }

            return result;
        } else {
            return "negatives not allowed";
        }
    }

    private getSplitRegex(input: string): RegExp {
        let splitRegex: RegExp = /[\n,]+/;

        if (input.substring(0, 2) === "//") {

            let userDelimiter: string = "";
            input = input.substring(2);
            if (input.substring(0, 1) === "[") {
                userDelimiter = input.substring(1, input.indexOf("]"));
            } else {
                userDelimiter = input.substring(0, 1);
            }
            splitRegex = new RegExp(`[\n,${userDelimiter}]+`);
        }

        return splitRegex;
    }
}

// regex to find chars in brackets: /\[(.*?)\]/gm