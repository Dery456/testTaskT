const pow = (a, b) => {
  let sum = 1;
  while (b) {
    sum = sum * a;
    b--;
  }
  return sum;
};

console.log(pow(3, 2) === 9);

console.log(pow(3, 3) === 27);

console.log(pow(1, 100) === 1);

console.log(pow(3, 0) === 1);

console.log(pow(0, 34) === 0);

console.log(pow() === 1);
