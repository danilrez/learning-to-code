const validParentheses = (str) => {
	let n = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '(') n++;
		if (str[i] === ')') n--;
		if (n < 0) return false;
	}
	return n === 0;
};
