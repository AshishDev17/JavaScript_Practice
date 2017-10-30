/*Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any
elements with the same value next to each other and preserving the original order of elements.
For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]*/

const uniqueInOrder = (str) => {
  const uniqueOrder = [];
  let last;

  for (let i = 0; i < str.length; i++){
    if (str[i] !== last) uniqueOrder.push(str[i]);
    last = str[i];
  }

  return uniqueOrder;
};

console.log('unique order ', uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']
console.log('unique order ', uniqueInOrder('ABBCcAD')); // ['A', 'B', 'C', 'c', 'A', 'D']
console.log('unique order ', uniqueInOrder([1, 2, 2, 3, 3])); // [1,2,3]
