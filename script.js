const user_input = document.querySelector("#user-input");
const partner_input = document.querySelector("#partner-input");
const input = document.querySelectorAll(".input");

const calculate_button = document.querySelector(".button");
const vowels = "aeiou";
const love = "love";
const consonants = "bcdfghjklmnpqrstvwxyz";

// ========================================================
const calculate = () => {
  let resultToDisplay = 0;
  if (user_input.value.length === partner_input.value.length) {
    resultToDisplay += 20;
    console.log(resultToDisplay);
  }
  if (hasVowels(user_input.value[0]) && hasVowels(partner_input.value[0])) {
    resultToDisplay += 10;

    console.log(resultToDisplay);
  }
  if (
    hasConsonant(user_input.value[0]) &&
    hasConsonant(partner_input.value[0])
  ) {
    resultToDisplay += 8;

    console.log(resultToDisplay);
  }
  if (
    numberOfVowels(user_input.value) === numberOfVowels(partner_input.value)
  ) {
    resultToDisplay += 12;

    console.log(resultToDisplay);
  }
  if (
    numberOfConsonants(user_input.value) ===
    numberOfConsonants(partner_input.value)
  ) {
    resultToDisplay += 12;

    console.log(resultToDisplay);
  }
  if (
    love.includes(user_input.value[0]) &&
    love.includes(partner_input.value[0])
  ) {
    resultToDisplay += 7;
  }

  display(resultToDisplay);
};

// ========================================================
calculate_button.addEventListener("click", () => {
  calculate();
});

// ========================================================
const display = (str) => {
  console.log(str);
};
// ========================================================
const hasVowels = (inp) => {
  for (let item of vowels) {
    if (inp.includes(item)) {
      return true;
    }
  }
  return false;
};

// ========================================================
const hasConsonant = (inpC) => {
  if (consonants.includes(inpC)) {
    return true;
  }
  return false;
};

// ========================================================
const numberOfVowels = (inp) => {
  let count = 0;
  for (let item of inp) {
    if (vowels.includes(item)) {
      count += 1;
    }
  }
  return count;
};

// ========================================================
const numberOfConsonants = (inp) => {
  let count = 0;
  for (let item of inp) {
    if (consonants.includes(item)) {
      count += 1;
    }
  }
  return count;
};
