/*
  The insertion sort has two loops. The outer loop moves element by element through the array, while the inner loop compares the element chosen in the outer loop to the element next (previous) to it in the array. If the element selected by the outer loop is less than the element selected by the inner loop, array elements are shifted over to the right to make room for the outer-loop element.
 */

const insertionSort = (arr) => {
  let j, temp;

  for (let i = 1; i < arr.length; i++) {
    console.log('Step ', i);
    j = i;
    temp = arr[i];

    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }

    arr[j] = temp;
    console.log('arr ', arr);
    console.log();
  }
};

const arr = [20, 10, 2, 30, 9, 1, 5, 6];

console.log('Before insertion sort: arr = ', arr);
console.log('------------------------------');

insertionSort(arr);

console.log('------------------------------');
console.log('After insertion sort: arr = ', arr);

