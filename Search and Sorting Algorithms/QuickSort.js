/*
  Quick Sort Algorithm using pivot as starting element of the array.
 */

const quickSort = (arr) => {
if (arr.length === 0) {
  return [];
}

const lesser = [];
const greater = [];
const pivot = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] < pivot) {
    lesser.push(arr[i]);
  }
  else {
    greater.push(arr[i]);
  }
}

return quickSort(lesser).concat(pivot, quickSort(greater));
}


let arr = [20, 10, 2, 30, 9, 1, 5, 6];

console.log('Before quick sort: arr = ', arr);
console.log('------------------------------');

arr = quickSort(arr);

console.log('------------------------------');
console.log('After quick sort: arr = ', arr);

