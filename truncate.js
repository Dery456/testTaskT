const truncate = (str, maxlength) => {
  if (str) {
    if (str.length === 3) {
      return str.slice(0, maxlength) + "...";
    }

    return str.length > maxlength ? str.slice(0, maxlength - 1) + "..." : str;
  }
  return "";
};

console.log(
  truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) ===
    "Вот, что мне хотело..."
);

console.log(truncate("Всем привет!", 20) === "Всем привет!");
console.log(truncate("", 20) === "");
console.log(truncate() === "");
console.log(truncate("ABs", 1) === "A...");
