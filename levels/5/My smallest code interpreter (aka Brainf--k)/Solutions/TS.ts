export const brainLuck = (code: string, input: string) => {
	let dataPointer: number = 0;
	let instructionPointer: number = 0;
	let inputPointer: number = 0;
	const data: number[] = [];
	let output: string = '';

	const getByte = () => data[dataPointer] || 0;
	const setByte = (val: number) => (data[dataPointer] = val);
	const getInput = () => input[inputPointer++].charCodeAt(0);
	const mutate = (fn) => (data[dataPointer] = (fn(getByte()) + 256) % 256);

	while (instructionPointer < code.length) {
		const instruction = code[instructionPointer];
		switch (instruction) {
			case '>':
				dataPointer++;
				break;
			case '<':
				dataPointer--;
				break;
			case '+':
				mutate((b) => b + 1);
				break;
			case '-':
				mutate((b) => b - 1);
				break;
			case '.':
				output += String.fromCharCode(getByte());
				break;
			case ',':
				setByte(getInput());
				break;
			case '[':
				if (getByte() === 0) {
					let nesting = 1;
					while (nesting > 0) {
						instructionPointer++;
						if (code[instructionPointer] === ']') {
							nesting--;
						} else if (code[instructionPointer] === '[') {
							nesting++;
						}
					}
				}
				break;
			case ']':
				if (getByte() !== 0) {
					let nesting = 1;
					while (nesting > 0) {
						instructionPointer--;
						if (code[instructionPointer] === '[') {
							nesting--;
						} else if (code[instructionPointer] === ']') {
							nesting++;
						}
					}
				}
				break;
			default:
				throw new Error(`Unknown instruction ${instruction}`);
		}
		instructionPointer++;
	}
	return output;
};
