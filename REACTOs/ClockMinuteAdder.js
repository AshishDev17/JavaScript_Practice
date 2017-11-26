/*
  REACTO: CLOCK MINUTE ADDER

  DESCRIPTION: Given a current time in the string format HH:MM and a number of minutes, return the clock time given those minutes added to the base time. Assume you're working with a standard 12-hour clock and the output should match the input format HH:MM.

  EXAMPLES:
  addMinutes('1:30', 30);     // 2:00
  addMinutes('12:30', 40);    // 1:10
  addMinutes('11:59', 1);     // 12:00
  addMinutes('1:59', 240);    // 5:59
  addMinutes('1:23', 456789); // 6:32
*/

/*
  SOLUTION
*/

function addMinutes (oldTime, minLater) {
  const [oldHrs, oldMins] = oldTime.split(':').map(str => Number(str));

  const oldTotalMins = (oldHrs * 60) + oldMins;
  const newTotalMins = oldTotalMins + minLater;
  const totalHrs = Math.floor(newTotalMins / 60);
  const newHrs = ((totalHrs - 1) % 12) + 1;
  const newMins = newTotalMins % 60;

  return `${newHrs}:${newMins > 9 ? newMins : `0${newMins}`}`;
}

  console.log(addMinutes('1:30', 30))   // 2:00
  console.log(addMinutes('12:30', 40))    // 1:10
  console.log(addMinutes('11:59', 1))    // 12:00
  console.log(addMinutes('1:59', 240))    // 5:59
  console.log(addMinutes('1:23', 456789)) // 6:32
