/*Find sum of the  n fibonacci numbers in sequence*/

const fibSum = (n) => {
  const fibonacciSeq = [1, 1];

  for (let i = 2; i <= n; i++){
    fibonacciSeq[i] = fibonacciSeq[i - 1] + fibonacciSeq[i - 2];
  }

  return fibonacciSeq.reduce((sum, num) => {
    sum += num;

    return sum;
  });
};

console.log('fibonacci sequence sum is equal to ', fibSum(4));
