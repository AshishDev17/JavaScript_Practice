/*
  Selection sort works by starting at the beginning of the array and comparing the first element with the remaining elements. After examining all the elements, the smallest element is placed in the first position of the array, and the algorithm moves to the second position. This process continues until the algorithm arrives at the next to last position in the array, at which point all the data is sorted.
 */

const swap = (array, index1, index2) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;
    console.log('Step ', i + 1);
    for (let j = i; j < arr.length; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }

    if (i !== indexMin) {
      swap(arr, i, indexMin);
    }

    console.log('arr = ', arr);
    console.log();
  }
};

const arr = [20, 10, 2, 30, 9, 1, 5, 6];

console.log('Before selection sort: arr = ', arr);
console.log('------------------------------');

selectionSort(arr);

console.log('------------------------------');
console.log('After selection sort: arr = ', arr);
