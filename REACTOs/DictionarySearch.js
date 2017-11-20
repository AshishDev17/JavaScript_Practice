/*Given an alphabetical array of dcitionary entries, and a word to search for.
Find and return the word's definition, if exists. */

const dictionary = [
  'a - Used when mentioning someone or something for the first time in a text or converstaion',
  'and - Used to connect words of the same part of speech, clauses, or sentences, that are to be taken jointly',
  'be - Exist',
  'of - Expressing the relationship between a part and whole',
  'the - Denoting one or more people of things already mentioned or assumed to be common knowledge',
  'to - Expressing motion in the direction of ( a particular location)',
];

/*
  Approach 1 - Naive Approach
*/

//using for loop
// const definitionOf = (word, dict) => {
//   for (let i = 0; i < dict.length; i++) {
//     if (dict[i].startsWith(word + ' - ')) {
//       return dict[i].slice(word.length + 3);
//     }
//   }
// };

//using find() method
const definitionOf = (word, dict) => {
  const definition = dict.find(entry => entry.startsWith(word + ' - '));

  if (definition) {
    return definition.slice(word.length + 3);
  }
};
