console.log("---*alphaOrder*---");
const alphaOrder = (word) => {
  return word.split("").sort().join("");
};
console.log(alphaOrder("webdev"));
console.log();

console.log("---*toCamelCase*---");
const toCamelCase = (str) => {
  let strToArr = str.toLowerCase().split("_");
  for (let i = 1; i < strToArr.length; i++) {
    strToArr[i] = strToArr[i][0].toUpperCase() + strToArr[i].slice(1);
  }
  return strToArr.join("");
};
console.log(toCamelCase("hello_world_see"));
console.log(toCamelCase("javascript_is_fun"));
console.log();

console.log("---*hackerSpeak*---");
const hackerSpeak = (str) => {
  const lowerStr = str.toLowerCase();
  const letters = lowerStr.split("");
  const hackerSpeak = [];
  // const superCleanStr = cleanStr.replaceAll(" ", "");
  for (let i = 0; i < letters.length; i++) {
    switch (letters[i]) {
      case "a":
        letters[i] = "4";
        break;
      case "e":
        letters[i] = "3";
        break;
      case "i":
        letters[i] = "1";
        break;
      case "o":
        letters[i] = "0";
        break;
      case "s":
        letters[i] = "5";
        break;
      default:
        letters[i];
    }
    hackerSpeak.push(letters[i]);
  }
  return hackerSpeak.join("");
};
console.log(hackerSpeak("javascript is cool"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("become a coder"));
console.log();

const hackerSpeak = (str) => {
  return str
    .toLowerCase()
    .split("")
    .map((chr) => {
      switch (chr) {
        case "a":
          return "4";
        case "o":
          return "0";
        case "e":
          return "4";
        case "s":
          return "4";
        case "i":
          return "4";
        default:
          return chr;
      }
    })
    .join("");
};
console.log(hackerSpeak("javascript is cool"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("become a coder"));
console.log();

const hackerSpeak2 = (statement) => {
  const leet = { a: 4, b: 3, i: 1, o: 0, s: 5 };
  const speak = (letter) =>
    leet.hasOwnProperty(letter) ? leet[letter] : letter;

  return statement.split("").map(speak).join("");
};
console.log(hackerSpeak2("javascript is cool"));

const pigLatin = (str) => {
  const lowerCase = str.toLowerCase().replaceAll(".", "");
  const splitStr = lowerCase.split(" ");
  const vowels = ["a", "e", "i", "o", "u"];
  const pigTranslation = [];
  for (let i = 0; i < splitStr.length; i++) {
    let firstChar = splitStr[i][0];
    let remainder = splitStr[i].slice(1, splitStr[i].length);
    if (vowels.includes(firstChar)) {
      // checking if i is truthy or falsy.
      //If falsy, then it's the first word because it's 0.
      let firstCharVowel =
        (i ? firstChar : firstChar.toUpperCase()) + remainder + "way";
      pigTranslation.push(firstCharVowel);
    } else {
      if (i === 0) {
        let firstCharRem = remainder[0];
        let wordRemainder = remainder.slice(1, remainder.length);
        remainder = firstCharRem.toUpperCase() + wordRemainder;
      }
      let firstCharConsonant = remainder + firstChar + "ay";
      pigTranslation.push(firstCharConsonant);
    }
  }

  return pigTranslation.join(" ") + ".";
};
console.log(pigLatin("Cats are great pets."));
console.log(pigLatin("Tom got a small piece of pie."));
console.log(pigLatin("He told us a very exciting tale."));
