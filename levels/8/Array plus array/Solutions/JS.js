const arrayPlusArray = (arr1, arr2) =>
	[...arr1].reduce((a, b) => a + b) + [...arr2].reduce((a, b) => a + b);
