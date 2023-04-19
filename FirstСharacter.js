const FirstCharacterCaps = (str) => {
  return str
    .split(" ")
    .map((el) => {
      if (el) {
        return el[0].toUpperCase() + el.slice(1);
      }
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
};

console.log(FirstCharacterCaps("вася") === "Вася");
console.log(FirstCharacterCaps("Вася") === "Вася");
console.log(FirstCharacterCaps("привет мир") === "Привет Мир");
console.log(
  FirstCharacterCaps(" пРИВЕТ МИР                           есть") ===
    "ПРИВЕТ МИР Есть"
);
console.log(FirstCharacterCaps(" 123") === "123");
