const anagrams = (word, words) =>
	words.filter((w) => w.split('').sort().join('') === word.split('').sort().join(''));
