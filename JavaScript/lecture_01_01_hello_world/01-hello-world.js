function LetterChanges(str) {
  let resutlt = "";
  for (let i = 0; i < str.length; i++) {
    let letters = str[i];
    if (letters == "z") {
      letters = "a";
    } else if (
      str.charCodeAt(i) >= "a".charCodeAt(0) &&
      str.charCodeAt(i) >= "z".charCodeAt(0)
    ) {
      letters = String.fromCharCode(str.charCodeAt(i) + 1);
    }
    if (
      letters === "a" ||
      letters === "e" ||
      letters === "i" ||
      letters === "o" ||
      letters === "u"
    ) {
      letters = letters.toUpperCase();
    }
    resutlt += letters;
  }
  return resutlt;
}

// keep this function call here
console.log(LetterChanges("abcde"));
