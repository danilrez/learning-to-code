const cakes = (recipe, available) => {
  const cakesByIngridients = [];
  for (const key in recipe) {
    if (!available.hasOwnProperty(key)) return 0;
    cakesByIngridients.push(Math.floor(available[key] / recipe[key]));
  }
  return Math.min(...cakesByIngridients);
};