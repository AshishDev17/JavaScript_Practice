/*Given hours and mins, find the angle between hour and minute hand
hours are in twelve hour format*/

const getClockAngle = (hours, mins) => {
  let hourHandAngle = (hours * 30) + (mins * 0.5);
  let minHandAngle = mins * 6;

  if (hourHandAngle > minHandAngle){
    return hourHandAngle - minHandAngle;
  }
  else {
    return minHandAngle - hourHandAngle;
  }
};

console.log('getClockAngle(4, 42) = ', getClockAngle(4, 42));
