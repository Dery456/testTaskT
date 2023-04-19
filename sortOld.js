const sortByAge = (user) => {
  if (user) {
    return user.sort((a, b) => a.age - b.age);
  }
  return 0;
};

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

sortByAge(arr);

console.log(arr[0].name === "Вася");
console.log(arr[1].name === "Маша");
console.log(arr[2].name === "Петя");

let vasya1 = { name: "Вася", age: 3 };
let petya1 = { name: "Петя", age: 2 };
let masha1 = { name: "Маша", age: 1 };

let arr1 = [vasya1, petya1, masha1];

sortByAge(arr1);

console.log(arr1[0].name === "Маша");
console.log(arr1[1].name === "Петя");
console.log(arr1[2].name === "Вася");

let vasya2 = { name: "Вася", age: 0 };
let petya2 = { name: "Петя", age: 0 };
let masha2 = { name: "Маша", age: 1 };

let arr2 = [vasya2, petya2, masha2];

sortByAge(arr2);

console.log(arr2[0].name === "Вася");
console.log(arr2[1].name === "Петя");
console.log(arr2[2].name === "Маша");

console.log(sortByAge() === 0);
