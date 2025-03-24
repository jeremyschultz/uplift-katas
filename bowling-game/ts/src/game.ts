export class BowlingGame {

    private rollList: number[] = [];

    public rollHandler(pins: number): void {
        this.rollList.push(pins);
        if (pins === 10) {
            this.rollList.push(0);
        }
    }

    public getScore(): number {
        let score: number = 0;
        console.log(this.rollList);

        this.rollList.forEach((roll, index) => {
            if (index % 2 === 0 && roll === 10) {
                score += roll + this.rollList[index + 2] + this.rollList[index + 3];
            }
            else if (index % 2 === 1 && roll !== 0 && roll + this.rollList[index - 1] === 10) {
                score += roll + this.rollList[index + 1];
            } else {
                score += roll;
            }
        })

        return score;
    }
}