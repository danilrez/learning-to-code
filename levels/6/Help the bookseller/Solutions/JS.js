const stockList = (listOfBooks, listOfCat) => {
  if (!listOfBooks.length || !listOfCat.length) return '';

  const booksByCategory = {};

  listOfBooks.forEach((el) => {
    const [category, amount] = el.split(' ');
    const catCode = category[0];
    booksByCategory[catCode] = (booksByCategory[catCode] || 0) + Number(amount);
  });

  return listOfCat.map((el) => `(${el} : ${booksByCategory[el] || 0})`).join(' - ');
};
