export class PencilDurability {
	private paper: string = "";
	private durability: number = 10;

	public write(input: string): void {
		if (input.length > this.durability) {
			let truncatedInput: string = input.substring(0, this.durability);
			let remainderInput: string[] = input.substring(this.durability).split("");
			for(let char of remainderInput) {
				truncatedInput += " ";
			}
			input = truncatedInput;
		}
		this.paper += input;
		this.durability -= input.replaceAll(" ", "").replaceAll("\n", "").length;
		if (this.durability < 0) {
			this.durability = 0;
		}
	}

	public getPaper(): string {
		return this.paper;
	}

	public sharpenPencil(): void {
		this.durability = 100;
	}

	public getDurability(): number {
		return this.durability;
	}
}