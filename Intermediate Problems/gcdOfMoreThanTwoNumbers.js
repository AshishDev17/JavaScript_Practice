// find gcd of more than two numbers

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

const gcdOfMultipleNums = (arr) => {
  let a = arr[0];

  for (let i = 1; i < arr.length; i++){
    let b = arr[i];
    a = gcd(a, b);
  }

  return a;
};

console.log('gcd of [45, 35, 5, 20] is ', gcdOfMultipleNums([45, 35, 5, 20]));
