const X1 = 0;
const Y1 = 1;
const X2 = 2;
const Y2 = 3;

let ASC = (d) => (a, b) => a[d] - b[d],
	ASCX = (a, b) => a - b;

calcVerticalZones = (rectangles) => {
	let height = 0;
	rectangles.sort(ASC(Y1)).reduce((prevY, cur) => {
		if (prevY < cur[Y2]) {
			height += cur[Y2] - Math.max(cur[Y1], prevY);
			return cur[Y2];
		}
		return prevY;
	}, 0);
	return height;
};

const calculate = (recs) => {
	recs.lehgnt == 0 ? 0 : null;

	let area = 0;
	let positions = new Set();
	let startFrom = 0;

	recs = recs.sort(ASC(X1));
	recs.forEach((rectangle) => {
		positions.add(rectangle[X1]);
		positions.add(rectangle[X2]);
	});

	let rectanglesInProgress = [];
	[...positions].sort(ASCX).map((position, i, a) => {
		let prevPosition = a[i - 1] || 0;

		let height = calcVerticalZones(rectanglesInProgress),
			width = position - prevPosition;

		area += width * height;

		rectanglesInProgress = rectanglesInProgress.filter((r) => r[X2] > position);

		for (
			let i = startFrom;
			i < recs.length && recs[i][X1] === position;
			startFrom = ++i
		) {
			rectanglesInProgress.push(recs[i]);
		}
	});

	return area;
};
