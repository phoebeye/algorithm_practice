// whether a string/array is palindrom
var isPalindrome = function(arr){
    let head = 0;
    let tail = arr.length - 1;
    while(tail > head){
      if(arr[head] !== arr[tail]){
        return false;
      }
      head++;
      tail--;
    }
    return true;
}
