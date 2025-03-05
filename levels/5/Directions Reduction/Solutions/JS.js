const dirReduc = (arr) => {
	const oppositeDirs = {
		NORTH: 'SOUTH',
		SOUTH: 'NORTH',
		WEST: 'EAST',
		EAST: 'WEST',
	};

	return arr.reduce((acc, el) => {
		acc[acc.length - 1] === oppositeDirs[el] ? acc.pop() : acc.push(el);
		return acc;
	}, []);
};
