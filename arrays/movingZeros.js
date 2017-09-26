// Question_1:
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
//
// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// Solution_1: using swap for modifying in-place
// hints: moving zeros to the end also means moving non-zeros forward
//time complexity: O(N), space complexity: O(1)
function moveZeros(nums){
  let lastNonZeroIndx = 0;
  for(let i=0; i<nums.length;i++){
    if(nums[i] !== 0){
      swap(lastNonZeroIndx, i);
      lastNonZeroIndx++;
    }
  }

  // helper fn: swap
  function swap(from,to) {
    let temp = nums[from];
    nums[from] = nums[to];
    nums[to] = temp;
  }
}
