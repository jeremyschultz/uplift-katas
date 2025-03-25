import {PencilDurability} from "./pencil-durability";

describe("PencilDurability", () => {
	let Pencil: PencilDurability;
	beforeEach(() => {
		Pencil = new PencilDurability;
	});

	test("has a blank sheet at start", () => {
		expect(Pencil.getPaper()).toEqual("");
	});

	test("paper has text when written on once", () => {
		Pencil.write("test text");
		expect(Pencil.getPaper()).toEqual("test text");
	});

	test("paper has text plus appended text when written twice", () => {
		Pencil.write("sea shells");
		Pencil.sharpenPencil();
		Pencil.write(" by the seashore.");
		expect(Pencil.getPaper()).toEqual("sea shells by the seashore.");
	});

	test("has a value for durability", () => {
		expect(Pencil.getDurability()).toEqual(10);
	});

	test("degrades as it writes", () => {
		Pencil.write("abcde");
		expect(Pencil.getDurability()).toEqual(5);
	});

	test("does not degrade below zero", () => {
		Pencil.write("abcdefghijklmn");
		expect(Pencil.getDurability()).toEqual(0);
	});

	test("writes spaces only after durability is zero", () => {
		Pencil.write("jeremy schultz");
		expect(Pencil.getPaper()).toEqual("jeremy sch    ");
	});

	test("spaces do not reduce durability", () => {
		Pencil.write("123 45")
		expect(Pencil.getDurability()).toEqual(5);
	});

	test("newlines do not reduce durability", () => {
		Pencil.write("123\n45")
		expect(Pencil.getDurability()).toEqual(5);
	});
})


