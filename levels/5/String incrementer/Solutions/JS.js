const incrementString = (str) => str.replace(/[0-8]?9*$/, (match) => Number(match) + 1);
