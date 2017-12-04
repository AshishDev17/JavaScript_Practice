/*The bubble sort gets its name because when data are sorted using the algorithm, values float like a bubble from one end of the array to the other. Assuming you are sorting a set of numbers into ascending order, larger values float to the right of the array and lower values float to the left. This behavior is the result of the algorithm moving through the array many times, comparing adjacent values, and swapping them if the value to the left is greater than the value to the right.*/

const swap = (array, index1, index2) =>{
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
};

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log('Step ', i);
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
    console.log('arr = ', arr);
    console.log();
  }
};

const arr = [20, 10, 2, 30, 9, 1, 5, 6];

console.log('Before bubble sort: arr = ', arr);
console.log('------------------------------');

bubbleSort(arr);

console.log('------------------------------');
console.log('After bubble sort: arr = ', arr);

