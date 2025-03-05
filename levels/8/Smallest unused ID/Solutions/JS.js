const nextId = (ids) => {
	let x = 0;
	while (ids.includes(x)) x++;
	return x;
};
