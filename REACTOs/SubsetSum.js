const subsetSum = (target, array, memo = {}) => {
  const possibleSums = new Set([0])
  for(let arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    let toAdd = []
    for(let sum of possibleSums) {
      if(sum + array[arrayIndex] === target) return true
      if(sum + array[arrayIndex] < target) toAdd.push(sum + array[arrayIndex])
    }
    possibleSums.add(...toAdd)
  }
  return false
}

const recursiveSubsetSum = (target, array, index = 0, memo = {}) => {
  if(memo.hasOwnProperty(target)) return memo[target]
  if(target === 0) return true
  if(index >= array.length || target < 0) return false
  const num = array[index]

  const include = recursiveSubsetSum(target - num, array, index + 1, memo)
  const notInclude = recursiveSubsetSum(target, array, index + 1, memo)

  const result = include || notInclude
  memo[target] = result
  return result
}

console.log(subsetSum(2, [1,1]))
console.log(recursiveSubsetSum(10, [3, 5, 7]))
console.log(subsetSum(12, [3,4,10, 11 ,6]))
