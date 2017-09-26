//find the first duplicates from array, array is n size, number varys from 1~n; return the first duplicate number
//Solution: mark visited number as negative at corresponding index;
//time: O(n), space O(1)
function findDuplicates(arr){
  for(let i=0;i<arr.length;i++){
    let position = arr[i] - 1;
    if(arr[position] < 0){
      return arr[i];
    } else {
      arr[position] = - arr[position];
    }
  }
  return -1;
}
