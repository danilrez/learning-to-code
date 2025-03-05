const comp = (arr1, arr2) =>
  !!arr1 &&
  !!arr2 &&
  arr1
    .map((x) => x * x)
    .sort()
    .join() == arr2.sort().join();
