const iqTest = (numbers) => {
  const arr = numbers.split(' ').map((num) => (Number(num) % 2 === 0 ? 'even' : 'odd'));
  return (
    arr.indexOf(arr.filter((item) => item === 'even').length === 1 ? 'even' : 'odd') + 1
  );
};
