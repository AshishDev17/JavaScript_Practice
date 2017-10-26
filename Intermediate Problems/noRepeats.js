/*
 Write a function, `no_repeats(year_start, year_end)`, which takes a
 range of years and outputs those years which do not have any
 repeated digits.
 You should probably write a helper function, `no_repeat?(year)` which
 returns true/false if a single year doesn't have a repeat.
 */

const hasNoRepeatedDigits = (year) => {
  const digits = year.toString().split('');
  const noRpeatedDigits = [];

  for (let i = 0; i < digits.length; i++){
    if (noRpeatedDigits.indexOf(digits[i]) >= 0) return false;

    noRpeatedDigits.push(digits[i]);
  }

  return true;
};

const noRepeats = (yearsStart, yearEnd) => {
  const noRepeat = [];

  for (var i = yearsStart; i <= yearEnd; i++){
    if (hasNoRepeatedDigits(i)){
      noRepeat.push(i);
    }
  }

  return noRepeat;
};

console.log('all no repeat years ', noRepeats(1980, 1987));
