/*
 Write a method, `orderedVowelWords(str)` that takes a string of
 lowercase words and returns a string with just the words containing
 all their vowels (excluding "y") in alphabetical order. Vowels may
 be repeated (`"afoot"` is an ordered vowel word).
 You will probably want a helper method, `orderedVowelWord?(word)`
 which returns true/false if a word's vowels are ordered.*/

 const isOrderedVowelWord = (word) => {
   const vowels = word.match(/[aeiou]/g);

   //if there are no vowels in the word then it is ordered vowel word
   if (vowels === null) return true;

   for (let i = 0; i < vowels.length - 1; i++){
     if (vowels[i] > vowels[i + 1]) return false;
   }

   return true;
 };

 const orderedVowelWords = (str) => {
  return str.split(' ').filter(word => isOrderedVowelWord(word)).join(' ');
 };

console.log(orderedVowelWords("amends") === "amends");
console.log(orderedVowelWords("complicated") === "");
console.log(orderedVowelWords("afoot") === "afoot");
console.log(orderedVowelWords("ham") === "ham");
console.log(orderedVowelWords("crypt") === "crypt");
console.log(orderedVowelWords("o") === "o");
console.log(orderedVowelWords("this is a test of the vowel ordering system") === "this is a test of the system");
