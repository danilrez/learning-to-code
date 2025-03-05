const arraysSimilar = (arr1, arr2) =>
  JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort());
