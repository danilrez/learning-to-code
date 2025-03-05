export const dblLinear = (n: number): number => {
	const u = [1];
	let a = 0,
		b = 0;

	while (u.length <= n) {
		let nextA = 2 * u[a] + 1;
		let nextB = 3 * u[b] + 1;
		nextA < nextB
			? (u.push(nextA), a++)
			: nextA > nextB
			? (u.push(nextB), b++)
			: (u.push(nextA), a++, b++);
	}
	return u[n];
};
