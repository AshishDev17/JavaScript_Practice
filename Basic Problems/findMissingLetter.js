/*Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
Remember to use Read-Search-Ask if you get stuck. Try to pair program.
fearNotLetter("abce") should return "d".
fearNotLetter("abcdefghjklmno") should return "i".
fearNotLetter("bcd") should return undefined.
fearNotLetter("yz") should return undefined*/

const fearNotLetter = (str) => {
  let alphabets = 'abcdefghijklmnopqrstuvwxyz';

  let index = alphabets.indexOf(str[0]);

  for (let i = 0; i < str.length; i++){
    if (str[i] !== alphabets[index + i]){
      return alphabets[i];
    }
  }
};

console.log('missing letter is ', fearNotLetter('abce'));
