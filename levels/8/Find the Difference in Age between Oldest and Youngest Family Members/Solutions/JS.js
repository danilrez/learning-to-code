const differenceInAges = (ages) => [
	Math.min(...ages),
	Math.max(...ages),
	Math.max(...ages) - Math.min(...ages),
];
