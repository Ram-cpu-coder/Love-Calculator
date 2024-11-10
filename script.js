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
  }
  if (hasVowels(user_input.value[0]) && hasVowels(partner_input.value[0])) {
    resultToDisplay += 10;
  }
  if (
    hasConsonant(user_input.value[0]) &&
    hasConsonant(partner_input.value[0])
  ) {
    resultToDisplay += 8;
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
