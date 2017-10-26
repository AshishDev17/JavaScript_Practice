/*find nth prime*/

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++){
    if (num % i === 0) return false;
  }

  return true;
};

const nthPrime = (n) => {
  const primes = [];

  let num = 2;

  while (primes.length < n){
    if (isPrime(num)){
      primes.push(num);
    }

    num++;
  }

  return primes[primes.length - 1];
};

console.log('nth prime ', nthPrime(1));
