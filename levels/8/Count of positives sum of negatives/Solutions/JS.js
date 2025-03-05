const countPositivesSumNegatives = (input) => {
	if (input === null || input.length === 0) return [];

	let positive = 0,
		negative = 0;

	for (let i = 0, l = input.length; i < l; i++) {
		input[i] > 0 ? positive++ : (negative += input[i]);
	}

	return [positive, negative];
};
