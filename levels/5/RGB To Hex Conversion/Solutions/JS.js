const rgb = (r, g, b) => rgbToHex(r) + rgbToHex(g) + rgbToHex(b);

const rgbToHex = (item) => {
	if (item > 255) return 'FF';
	if (item < 0) return '00';
	return item.toString(16).padStart(2, '0').toUpperCase();
};
