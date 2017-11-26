// PROMPT: Given a target sum and an array of positive integers, return true if any combination of numbers in the array can add to the target. Each number in the array may only be used once. Return false if the numbers cannot be used to add to the target sum.

/* When you un-comment what is commented out, you can see the memo object and the difference between the number of calls for the memoized function v. the number of calls for the non-memoized function! */

//let numCallsNonMemoized = 0;

function subSetSum (target, array) {

//	numCallsNonMemoized++;

	if (target === 0) return true;
	if (!array.length || target < 0) return false;

	const whenIncluded = subSetSum(target - array[0], array.slice(1));
	const whenExcluded = subSetSum(target, array.slice(1));

	return whenIncluded || whenExcluded;
}

//let numCallsMemoized = 0;
//let memoObject;

function subSetSumMemo (target, array, memo = {}) {

//	numCallsMemoized++;

	if (memo.hasOwnProperty(target)) return memo[target];

	if (target === 0) return true;
	if (!array.length || target < 0) return false;

	const whenIncluded = subSetSumMemo(target - array[0], array.slice(1), memo);
	const whenExcluded = subSetSumMemo(target, array.slice(1), memo);

	const equalToTarget = whenIncluded || whenExcluded;
	memo[target] = equalToTarget;
//	memoObject = memo;
	return equalToTarget;
}

subSetSum(81, [9, 13, 2, 22, 18, 35, 6]);
subSetSumMemo(81, [9, 13, 2, 22, 18, 35, 6]);

//console.log(memoObject);

//console.log(`Without memoization, our function is called ${numCallsNonMemoized} times, but WITH memoization, our function is only called ${numCallsMemoized} times!`);
