const humanReadable = (sec) => {
	const time = (num) => (num < 10 ? `0${num}` : num);

	const SS = time(sec % 60),
		MM = time(Math.floor(sec / 60) % 60),
		HH = time(Math.floor(sec / 3600));

	return `${HH}:${MM}:${SS}`;
};
