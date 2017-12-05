/*
  The Mergesort algorithm is so named because it works by merging sorted sublists together to form a larger, completely sorted list. In theory, this algorithm should be easy to implement. We need two sorted subarrays and a third array into which we merge the two subarrays by comparing data elements and inserting the smallest element value. In practice, however, Mergesort has some problems because if we are trying to sort a very large data set using the algorithm, the amount of space we need to store the two merged subarrays can be quite large. Since space is not such an issue in these days of inexpensive memory, it is worth implementing Mergesort to see how it compares in efficiency to other sorting algorithms.
 */

//split() accepts an argument 'arr', which is an array and splits it from the center, and return another array that has split parts of the original array
const split = (arr) => {
  let splitIndex = Math.ceil(arr.length / 2);

  return [arr.slice(0, splitIndex), arr.slice(splitIndex)];
};

//merge() accepts two arguments, 'arrayL' and 'arrayR', and returns an array that contains all the elements from 'arrayL' and 'arrayR' in a sorted order
const merge = (arrayL, arrayR) => {
  let iL = 0;
  let iR = 0;
  const mergedArray = [];

  while (iL < arrayL.length && iR < arrayR.length) {
    if (arrayL[iL] < arrayR[iR]) {
      mergedArray.push(arrayL[iL]);
      iL++;
    }
    else {
      mergedArray.push(arrayR[iR]);
      iR++;
    }
  }

  const merged = mergedArray.concat(arrayL.slice(iL)).concat(arrayR.slice(iR));
  console.log('merged array ', merged);
  console.log();
  return merged;
};


const mergeSort = (arr) => {
  console.log('arr ', arr);
  console.log();
  if (arr.length <= 1) return arr;

  const halves = split(arr);

  const sortedFirstHalf = mergeSort(halves[0]);
  const sortedSecondHalf = mergeSort(halves[1]);

  return merge(sortedFirstHalf, sortedSecondHalf);
};

const arr = [20, 10, 2, 30, 9, 1, 5, 6];

console.log('Before merge sort: arr = ', arr);
console.log('------------------------------');

const sortedArray = mergeSort(arr);

console.log('------------------------------');
console.log('After merge sort: arr = ', sortedArray);
