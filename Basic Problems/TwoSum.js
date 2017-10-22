/*Given an sorted array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.*/

const twoSum = (arr, target) => {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    if (arr[i] + arr[j] === target){
      return [i, j];
    }
    else if (arr[i] + arr[j] > target){
      j--;
    }
    else {
      i++;
    }
  }
};

console.log('twoSum([2, 7, 11, 15], 9) = ', twoSum([2, 7, 11, 15], 9));
