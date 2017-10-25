const gcd = (a, b) => {
  if (a > 0 && b > 0){
    while (true){
      if (b === 0) return a;
      a = a % b;

      if (a === 0) return b;
      b = b % a;
    }
  }
  else {
    return null;
  }
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

const lcmOfMultipleNumbers = (arr) => {
  let a = arr[0];

  for(let i = 1; i < arr.length; i++){
    let b = arr[i];
    a = lcm(a, b);
  }

  return a;
};

console.log('lcm of mutiple numbers ', lcmOfMultipleNumbers([2, 10, 100, 20, 50]));
