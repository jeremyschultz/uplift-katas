type Frame = number[];

export class BowlingGame {
    private frameList: Frame[] = [];

    private frameCounter: number = 0;
    private rollCounter: number = 0;

    public roll(pins: number): void {
        if (this.rollCounter === 0) {
            this.frameList.push([pins, 0]);
            if (pins === 10) {
                this.frameCounter += 1;
            } else {
                this.rollCounter = 1;
            }
        } else {
            this.frameList[this.frameCounter][this.rollCounter] = pins;
            this.frameCounter += 1;
            this.rollCounter = 0;
        }
    }

    public getScore(): number {
        let score: number = 0;

        if (this.frameList.length === 12 && this.frameList.every(item => item[0] === 10 && item[1] === 0)) {
            score = 300;
        } else {
            this.frameList.forEach((frame, index) => {
                const frameScore = frame.reduce((sum, num) => sum + num, 0);
                score += frameScore;
                if (frameScore === 10) {
                    if (frame[0] === 10) {
                        score += this.frameList[index + 1][0] + this.frameList[index + 1][1];
                    } else {
                        score += this.frameList[index + 1][0];
                    }
                }
            })
        }

        return score;
    }
}