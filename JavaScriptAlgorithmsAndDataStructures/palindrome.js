let palindrome = str => {
  // Trim all spaces before and after.
  str = str.trim();

  // Replace all non-alphanumeric characters.
  let regex = /[^a-zA-Z0-9]/g;
  str = str.replace(regex, "");

  // Sentence in lowercase.
  str = str.toLowerCase();

  // Check if sentence is a palindrome.
  let initialSentence = str;
  let reverseSentence = str.split("").reverse().join("");

  let isSame = initialSentence.localeCompare(reverseSentence);

  if (isSame != 0) return false;

  return true;
};

// Tests: should return a boolean.
palindrome("eye");
palindrome("not a palindrome");
palindrome("My age is 0, 0 si ega ym.");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four");
