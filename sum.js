const sumSalary = (obj) => {
  let sum = 0;
  for (key in obj) {
    sum += obj[key];
  }
  return sum;
};

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

console.log(sumSalary(salaries) === 390);

let salaries2 = {
  John: 120,
  Ann: 160,
  Pete: 0,
};

console.log(sumSalary(salaries2) === 280);

let salaries3 = {};

console.log(sumSalary(salaries3) === 0);

let salaries4 = {
  John: 1,
  Ann: 1,
  Pete: 1,
};

console.log(sumSalary(salaries4) === 3);
