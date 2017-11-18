/*

  REACTO: Intersection

  DESCRIPTION: Given two sorted arrays of numbers, return an array containing all values that appear in both arrays. The numbers in the resulting array (the "intersection") may be returned in any order, they needn't be sorted.

  You can assume that each array has only unique values (no duplicates within the array).

  EXAMPLES:
  intersection([1,4,9,10,11], [2,3,4,5,8,10]); // should return [4, 10] (numbers can be in any order)
*/


/*
  Approach 1 - NAIVE SOLUTION
*/

// const intersection = (arr1, arr2) => {
//   const common = [];

//   arr1.forEach(ele1 => {
//     arr2.forEach(ele2 => {
//       if (ele1 === ele2) {
//         common.push(ele1);
//       }
//     });
//   });

//   return common;
// };


/*
  Approach 2 - RATCHETING (array A and B must be sorted)
*/

// const intersection = (arr1, arr2) => {
//   let i = 0;
//   let j = 0;
//   const common = [];

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] === arr2[j]) {
//       common.push(arr1[i]);
//     }
//     else if (arr1[i] <= arr2[j]) {
//       ++i;
//     }
//     else if (arr2[j] <= arr1[i]) {
//       ++j;
//     }
//   }

//   return common;
// }


/*
  Approach 3 - HASH SOLUTION
*/

// const intersection = (arr1, arr2) => {
//   const smaller = arr1.length < arr2.length ? arr1 : arr2;
//   const larger = arr1.length >= arr2.length ? arr1 : arr2;
//   const smallerHash = {};

//   smaller.forEach(ele => {
//     smallerHash[ele] = true;
//   });

//   return larger.filter(ele => smallerHash.hasOwnProperty(ele));
// }

/*
  HASH SOLUTION (w/ JavaScript Set)
*/

const intersection = (arr1, arr2) => {
  const smaller = arr1.length < arr2.length ? arr1 : arr2;
  const larger = arr1.length >= arr2.length ? arr1 : arr2;

  const smallerSet = new Set(smaller);

  return larger.filter(ele => smallerSet.has(ele));
};
