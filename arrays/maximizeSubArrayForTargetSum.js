// Question: Given an array nums and a target value k, find the maximum length of a subarray that sums to k. If there isn't one, return 0 instead.
//
// Note:
// The sum of the entire nums array is guaranteed to fit within the 32-bit signed integer range.
//
// Example 1:
// Given nums = [1, -1, 5, -2, 3], k = 3,
// return 4. (because the subarray [1, -1, 5, -2] sums to 3 and is the longest)
//
// Example 2:
// Given nums = [-2, -1, 2, 1], k = 1,
// return 2. (because the subarray [-1, 2] sums to 1 and is the longest)

// Solution:
// use object to store sum of all elements before index i as key, and i as value
// i.e [1, 2, -2, 3] --> sumObj = {1:0, 3:1, 1:2, 4:3}, from index 0 to index 2, subSum = 1-1 = 0;
//O(n)
function maximizeSubArrayForTargetSum (arr, k){
  let sumObj = {};
  let maxLen = 0;
  let sum = 0;
  for(let i=0;i<arr.length;i++){
    let sum += arr[i];
    if(sum === k){
      maxLen = k + 1;
    } else if(sumObj[sum - k] !== undefined) {
      maxLen = sumObj[sum - k] > maxLen? sumObj[sum - k] : maxLen;
    }
    if(sumObj[sum - k] === undefined) {
      sumObj[sum - k] = i;
    }
    return maxLen;

  }
}
