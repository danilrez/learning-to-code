const positiveSum = (arr) =>
	[...arr].filter((el) => el > 0).reduce((el, cur) => el + cur, 0);
