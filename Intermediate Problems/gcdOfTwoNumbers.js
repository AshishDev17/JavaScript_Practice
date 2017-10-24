// find gcd of two numbers

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

console.log('gcd ', gcd(10, 100));
