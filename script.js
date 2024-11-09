const user_input = document.querySelector("#user-input");
const partner_input = document.querySelector("#partner-input");
const input = document.querySelectorAll(".input");
// console.log(input);

const calculate_button = document.querySelector(".button");
const vowels = "aeiou";
const love = "love";
const consonants = "bcdfghjklmnpqrstvwxyz";
const calculate = () => {
  let resultToDisplay = 0;
  if (user_input.value.length === partner_input.value.length) {
    resultToDisplay += 20;
  }
  if (hasVowels(user_input.value) && hasVowels(partner_input.value)) {
    resultToDisplay += 10;
  }

  display(resultToDisplay);
};
calculate_button.addEventListener("click", () => {
  calculate();
});
const display = (str) => {
  console.log(str);
};

const hasVowels = (input) => {
  for (let item of vowels) {
    if (input.includes(item)) {
      return true;
    }
  }
  return false;
};
