const convertToCelsius = (t) => (t - 32) * (5 / 9);
const weatherInfo = (temp) =>
	convertToCelsius(temp) > 0
		? `${convertToCelsius(temp)} is above freezing temperature`
		: `${convertToCelsius(temp)} is freezing temperature`;
